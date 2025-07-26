# Medium Clone

A full-stack blogging platform inspired by Medium, allowing users to read, write, and share stories and ideas.

---

## 🚀 Live Demo

Check out the live project here: [https://medium-chi.vercel.app/](https://medium-chi.vercel.app/)

---

## Features

- User authentication (sign up, sign in, Google OAuth)
- Create, edit, and delete blog posts
- View all blogs and user-specific stories
- Rich text editing for blog content
- Responsive UI with modern design
- Avatar generation based on username
- State management with Recoil
- Toast notifications and loading skeletons

---

## Tech Stack

**Frontend:**

- React (with TypeScript)
- Vite
- Tailwind CSS
- Material UI (MUI)
- Recoil (state management)
- Axios (API requests)
- React Router

**Backend:**

- Hono (Express-like framework for Cloudflare Workers)
- Prisma ORM
- PostgreSQL (via Prisma)
- Google Auth Library
- CORS

**Common Modules:**

- Shared code between client and server

---

## Project Structure

```
Medium/
  client/           # Frontend React app
  server/           # Backend API (Hono + Prisma)
  common modules/   # Shared code
```

---

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- PostgreSQL database
- (Optional) Cloudflare account for deployment

### 1. Clone the repository

```bash
git clone <repo-url>
cd Medium
```

### 2. Install dependencies

#### Client

```bash
cd client
npm install
```

#### Server

```bash
cd ../server
npm install
```

### 3. Set up environment variables

- Create a `.env` file in `server/` with your database URL and any other secrets required by Prisma and the backend.

### 4. Run the development servers

#### Client

```bash
cd client
npm run dev
```

#### Server

```bash
cd server
npm run dev
```

### 5. Build and Deploy

- To build the client for production:
  ```bash
  npm run build
  ```
- To deploy the server (Cloudflare Workers):
  ```bash
  npm run deploy
  ```

---

## Database Schema

The backend uses Prisma ORM with a PostgreSQL database. The main models are:

```prisma
model User {
  id       Int     @id @default(autoincrement())
  name     String
  email    String  @unique
  password String
  blog     Blog[]
}

model Blog {
  id        Int      @id @default(autoincrement())
  authorId  Int
  title     String
  content   String
  imagelink String
  published Boolean  @default(false)
  createdAT DateTime @default(now())
  updatedAt DateTime @updatedAt
  author    User     @relation(fields: [authorId], references: [id])
}
```

---

## Scripts

### Client

- `npm run dev` – Start the Vite development server
- `npm run build` – Build the app for production
- `npm run preview` – Preview the production build
- `npm run lint` – Run ESLint

### Server

- `npm run dev` – Start the backend in development mode (Cloudflare Wrangler)
- `npm run deploy` – Deploy the backend to Cloudflare Workers

---

## License

This project is for educational purposes and is not affiliated with Medium.
