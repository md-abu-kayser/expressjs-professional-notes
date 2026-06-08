# Error Handling Middleware

Defined with four arguments.

```javascript
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({ error: err.message });
});
```

- Must be placed last in the middleware chain.
- Call `next(err)` in regular middleware to skip to error handler.

## Custom Error Classes

```javascript
class AppError extends Error {
  constructor(message, status) {
    super(message);
    this.status = status;
  }
}
```

Then in routes: `throw new AppError('Not found', 404);`

> 📘 Next: [Third-party Middleware](05-third-party-middleware.md)
