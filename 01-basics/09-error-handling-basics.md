# Error Handling Basics

Express catches synchronous errors automatically. For async, use a wrapper.

## Synchronous

```javascript
app.get("/error", (req, res) => {
  throw new Error("Broken");
});
// Express will catch and call the error handler.
```

## Asynchronous

```javascript
app.get("/async-error", async (req, res, next) => {
  try {
    await someAsyncOp();
  } catch (err) {
    next(err);
  }
});
```

## Global Error Handler

Four arguments signature:

```javascript
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});
```

> 📘 Next: [Environment Variables](10-environment-variables.md)
