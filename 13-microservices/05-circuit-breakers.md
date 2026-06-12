# Circuit Breakers

Pattern to prevent cascading failures.

Use `opossum` library:

```javascript
const breaker = new CircuitBreaker(serviceCall, { timeout: 3000 });
const result = await breaker.fire();
```

> 📘 Next: [Event-Driven Architecture](06-event-driven-architecture.md)
