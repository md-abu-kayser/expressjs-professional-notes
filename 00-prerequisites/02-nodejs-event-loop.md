# Node.js Event Loop

Understanding the event loop is crucial for building efficient Express apps.

## The Event Loop in Brief

- Node.js runs on a single thread.
- The event loop handles I/O operations asynchronously.
- Phases: timers → pending callbacks → idle/prepare → poll → check → close callbacks.

## Blocking vs Non-Blocking

- Blocking code stops the entire process.
- Express must never block the event loop (e.g., heavy CPU in route handlers).

## Microtasks

`process.nextTick()` and Promises execute before next phase.

## Implications for Express

- Use async route handlers.
- Offload CPU-intensive tasks to worker threads or external services.
- Use proper error handling with async/await.

> 📘 Next: [Async Patterns](03-async-patterns.md)
