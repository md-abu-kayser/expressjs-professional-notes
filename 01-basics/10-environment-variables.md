# Environment Variables

Use environment variables to manage configuration without hardcoding.

## Using `.env` file (with `dotenv`)

```javascript
require("dotenv").config();
const port = process.env.PORT || 3000;
```

## Best Practices

- Never commit `.env` to version control.
- Provide a `.env.example` template.
- Validate required variables at startup.
- Use different files for different environments (dev, staging, prod).

## Custom Environment

`NODE_ENV=production node app.js`

> 📘 Next: **02-middleware** – [What is Middleware?](../02-middleware/01-what-is-middleware.md)
