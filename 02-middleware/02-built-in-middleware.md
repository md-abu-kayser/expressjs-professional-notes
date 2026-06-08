# Built-in Middleware

## `express.json()`

Parses JSON payloads (replaces body-parser).

```javascript
app.use(express.json());
```

## `express.urlencoded({ extended: true })`

Parses URL-encoded payloads.

## `express.static()`

Serves static assets.

## `express.Router()`

Modular route handlers (see later).

Express no longer bundles `cookie-parser`; use the separate package.

> 📘 Next: [Writing Custom Middleware](03-writing-custom-middleware.md)
