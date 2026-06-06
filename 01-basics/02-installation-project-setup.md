# Installation & Project Setup

## Prerequisites

- Node.js (LTS recommended)
- npm / yarn / pnpm

## Step 1: Initialize Project

```bash
mkdir myapp
cd myapp
npm init -y
```

## Step 2: Install Express

```bash
npm install express
```

## Step 3: Create Entry Point

`index.js`:

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Hello World!"));
app.listen(3000, () => console.log("Server running on port 3000"));
```

## Development Dependencies

- `nodemon` for auto-reload.
- `dotenv` for environment variables.

## Project Structure (basic)

```
myapp/
├── src/
│   ├── routes/
│   ├── controllers/
│   ├── models/
│   └── app.js
├── .env
├── package.json
└── index.js
```

> 📘 Next: [Basic Server](03-basic-server.md)
