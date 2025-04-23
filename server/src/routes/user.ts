import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { decode, sign, verify } from 'hono/jwt'
import { signupInput, SigninInput, signinInput } from 'medium-clone-common-modules';


export const userRouters = new Hono<{
  Bindings: {
    DATABASE_URL: string
    JWT_SECRET: string
  }
}>()

userRouters.post('/signup', async (c) => {
  const body = await c.req.json();
  const {success} = signupInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message:"your information is wrong"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.create({
      data: {
        name: body.name,
        email: body.email,
        password: body.password
      }
    });

    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET);
    c.status(200);
    c.text("signed up succesfully");
    return c.text(jwt);

  } catch (error) {
    console.log("unable to signup", error);
    return c.text("Invalid Error occured !");
  }

});

userRouters.post('/signin', async (c) => {
  const body = await c.req.json();
  const {success} = signinInput.safeParse(body);
  if(!success){
    c.status(411);
    return c.json({
      message:"your information is wrong"
    })
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const user = await prisma.user.findFirst({
      where: {
        email: body.email,
        password: body.password
      }
    })

    if(!user){
       c.status(403);
      return c.json({
        message:"Invalid Credetials"
      })
    }

    const jwt = await sign({
      id: user.id
    }, c.env.JWT_SECRET)
    c.text("login successfully");
    return c.text(jwt);

  } catch (error) {
    console.log("unable to sign in ", error);
    return c.text("Invalid Credentials")
  }
})
