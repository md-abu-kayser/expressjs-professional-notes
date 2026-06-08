# Writing Custom Middleware

## Example: Request Logger

```javascript
function requestLogger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
app.use(requestLogger);
```

## Example: Authentication Middleware

```javascript
function requireAuth(req, res, next) {
  if (!req.headers.authorization) return res.status(401).send("Unauthorized");
  // verify token...
  next();
}
app.use("/admin", requireAuth);
```

## Modifying `req` or `res`

```javascript
function addRequestTime(req, res, next) {
  req.requestTime = Date.now();
  next();
}
```

> 📘 Next: [Error Handling Middleware](04-error-handling-middleware.md)
