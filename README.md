# Parking Lot Management App

This repository contains a simple parking lot management application built with **TypeScript**, **React**, **Express** and **Prisma** using **SQLite**.

## Structure

- `server` - Express server written in TypeScript. Uses Prisma ORM with a SQLite database.
- `client` - React front‑end bootstrapped with Vite and TypeScript.

## Setup

The environment running these examples may not have internet access, so package installation commands are omitted. Ensure dependencies in `package.json` are installed before running.

### Server

```
cd server
# install dependencies (npm install)
# run migrations and generate prisma client
# npx prisma db push
npm run dev
```

The server starts on `http://localhost:3001`.

### Client

```
cd client
# install dependencies (npm install)
npm run dev
```

The client will be available on `http://localhost:3000` and proxies API requests to the server.
