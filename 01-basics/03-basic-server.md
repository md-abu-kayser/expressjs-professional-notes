# Basic Express Server

```javascript
const express = require("express");
const app = express();

// Middleware for parsing JSON
app.use(express.json());

// Route
app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
```

## Key Objects

- `app` – the Express application.
- `req` – enhanced Node.js request object.
- `res` – enhanced response object.

## Response Methods

- `res.send()` – send text/HTML/Buffer
- `res.json()` – send JSON
- `res.sendFile()` – send a file
- `res.status()` – set status code chainable

> 📘 Next: [Routing Basics](04-routing-basics.md)
