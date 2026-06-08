# What Is Middleware?

Middleware functions are functions that have access to the request object (`req`), the response object (`res`), and the next middleware function in the application’s request-response cycle.

## Signature

```javascript
(req, res, next) => { ... }
```

## They Can:

- Execute any code.
- Make changes to req/res.
- End the request-response cycle.
- Call the next middleware.

## Types

- Application-level
- Router-level
- Error-handling
- Built-in
- Third-party

> 📘 Next: [Built-in Middleware](02-built-in-middleware.md)
