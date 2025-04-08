import { Hono } from 'hono';
import { PrismaClient } from '@prisma/client/edge';
import { withAccelerate } from "@prisma/extension-accelerate";

import { User } from '@prisma/client';
import { Blog } from '@prisma/client';

const prisma = new PrismaClient()

const app = new Hono<{
  Bindings:{
    DATABASE_URL:string
  }
}>()

app.post('/api/v1/user/signup', async(c) => {
  const body =await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    await prisma.user.create({
      data:{
        name:body.name,
        email:body.email,
        password:body.password
      }
    })
    c.status(200)
    return c.text("Signed up successfully")
    
  } catch (error) {
    console.log("unable to signup", error)
    return c.text("Invalid Error occured !")
  }

  return c.text('Hello Hono!')
})
app.post('/api/v1/user/signin', (c) => {
  return c.text('Hello Hono!')
})
app.post('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.put('/api/v1/blog', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blog:id', (c) => {
  return c.text('Hello Hono!')
})
app.get('/api/v1/blogbulk', (c) => {
  return c.text('Hello Hono!')
})

export default app





// DATABASE_URL="prisma+postgres://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTYxY2JmZjgtNWE4Mi00YmFiLWI1MjQtOTU0YmU4ZDdlMWE5IiwidGVuYW50X2lkIjoiYTZmNWU4Y2U4YjQxYzg2ZWZiNWFlMzI1NDlmMWQ0NWU0MzQzZDc1YzgwZWI3NmRlZjA2ODk4OWIyYWQ5M2M0MiIsImludGVybmFsX3NlY3JldCI6ImI0MDcxYWU4LWNkZDUtNDU5NC05ODZkLTVmOGZlZDZkN2I3YiJ9.lvqHQMPxRBbJfgWKZFn2tmrHbyJwXhbqloFf5SjJjWw"
