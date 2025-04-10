import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from 'hono/jwt';


export const blogRouters = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    },
    Variables: {
        userId: string;
        user: string
    }
}>();

type userid = {
    id:string
}


blogRouters.use("/*", async (c, next) => {
    const authHeader = c.req.header("Authorization") || "";
    const user = await verify(authHeader, c.env.JWT_SECRET) as userid;
    if (user) {
        c.set("userId", user.id);
       await next();
    } else {
        c.status(403);
       return  c.json({
            message: "you have not logged in"
        })
    }
})

blogRouters.post('/blog', async (c) => {
    const body = await c.req.json();
    const userId = c.get("userId");
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const response = await prisma.blog.create({
            data: {
                title: body.title,
                content: body.content,
                authorId: Number(userId)
            }
        });

        c.status(200);
        return c.json({
            message: "Blog publiced successfully"
        })

    } catch (error) {
        c.status(403);
        return c.json({
            message: "Invalid Error Occured !"
        })

    }
})
blogRouters.put('/blog', async (c) => {
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const response = await prisma.blog.update({
            where: {
                id: body.id
            },
            data: {
                title: body.title,
                content: body.content
            }
        });

        c.status(200);
        return c.json({
            message: "Blog updated succesfully"
        })
    } catch (error) {
        c.status(403);
        return c.json({
            message: "Invalid Erro has Occured"
        })
    }
})
blogRouters.get('/blog', async (c) => {
    const body = c.req.json();
    const userId = c.get("userId")
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blog = await prisma.blog.findFirst({
            where: {
                authorId: Number(userId)
            }
        });

        c.status(200);
       return  c.json(blog);

    } catch (error) {
        c.status(200);
        return c.json({
            message: "Some Invalid error has occured"
        })
    }
})
blogRouters.get('/blogbulk', async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());

    try {
        const blogdata = await prisma.blog.findMany();
        c.status(200);
        return c.json(blogdata)

    } catch (error) {
        c.status(403);
        return c.json({
            message: "Some Invalid error has occured"
        })
    }
})