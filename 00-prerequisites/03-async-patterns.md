# Async Patterns in Node.js

## Callbacks

- Error-first callbacks (`(err, result) => {}`).
- Callback hell → avoid.

## Promises

- `.then()`, `.catch()`, `.finally()`.
- `Promise.all`, `Promise.allSettled`, `Promise.race`, `Promise.any`.

## Async/Await

- Cleaner syntax.
- Wrap in try-catch for error handling.
- Use `await` with promises, not callbacks.

## Express and Async

Express 4 does not handle rejected promises automatically; you must catch them.
Use a wrapper:

```javascript
const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
```

> 📘 Next: [Module System](04-module-system.md)
