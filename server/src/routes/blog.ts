import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { verify } from "hono/jwt";
import { createBlog, updateBlog } from "medium-clone-common-modules";

export const blogRouters = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
    user: string;
  };
}>();

type userid = {
  id: string;
};

blogRouters.use("/*", async (c, next) => {
  const authHeader = c.req.header("Authorization") || "";
  const user = (await verify(authHeader, c.env.JWT_SECRET)) as userid;
  if (user) {
    c.set("userId", user.id);
    await next();
  } else {
    c.status(403);
    return c.json({
      message: "you have not logged in",
    });
  }
});

blogRouters.post("/blog", async (c) => {
  const body = await c.req.json();
  const userId = c.get("userId");

  const { success } = createBlog.safeParse(body);
  if (!success) {
    c.status(411);
    return c.json({
      message: "wrong information",
    });
  }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.blog.create({
      data: {
        title: body.title,
        content: body.content,
        imagelink: body.imagelink,
        authorId: Number(userId),
      },
    });

    c.status(200);
    return c.json({
      message: "Blog publiced successfully",
    });
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Invalid Error Occured !",
    });
  }
});
blogRouters.put("/blog/:id", async (c) => {
  const id = c.req.param("id");
  const body = await c.req.json();
  //   const { success } = updateBlog.safeParse(body);
  //   if (!success) {
  //     c.status(411);
  //     return c.json({
  //       message: "wrong information",
  //     });
  //   }
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const response = await prisma.blog.update({
      where: {
        id: Number(id),
      },
      data: {
        title: body.title,
        content: body.content,
        imagelink: body.imagelink,
      },
    });

    c.status(200);
    return c.json({
      message: "Blog updated succesfully",
    });
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Invalid Erro has Occured",
    });
  }
});
blogRouters.get("/blog", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blog = await prisma.blog.findMany({
      where: {
        authorId: Number(userId),
      },
      select: {
        content: true,
        title: true,
        imagelink: true,
        createdAT: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });

    c.status(200);
    return c.json(blog);
  } catch (error) {
    c.status(200);
    return c.json({
      message: "Some Invalid error has occured",
    });
  }
});

blogRouters.get("/blogdetails/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const response = await prisma.blog.findFirst({
      where: {
        id: Number(id),
      },
      select: {
        content: true,
        title: true,
        imagelink: true,
        createdAT: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    return c.json(response);
  } catch (error) {
    c.status(304);
    return c.json({
      message: "Some Invalid error has occured",
    });
  }
});

blogRouters.delete("/deleteblog", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    await prisma.blog.delete({
      where: {
        id: body.id,
      },
    });
    c.status(200);
    return c.json({
      message: "Successfully deleted",
    });
  } catch (error) {
    c.status(304);
    return c.json({
      message: "some Invalid error has occured",
    });
  }
});

blogRouters.get("/blogbulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const blogdata = await prisma.blog.findMany({
      select: {
        content: true,
        title: true,
        imagelink: true,
        createdAT: true,
        id: true,
        author: {
          select: {
            name: true,
          },
        },
      },
    });
    c.status(200);
    return c.json(blogdata);
  } catch (error) {
    c.status(403);
    return c.json({
      message: "Some Invalid error has occured",
    });
  }
});
