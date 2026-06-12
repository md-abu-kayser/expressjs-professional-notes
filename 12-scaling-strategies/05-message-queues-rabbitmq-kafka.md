# Message Queues

Decouple services with RabbitMQ or Kafka. Use for async tasks (emails, reports).

```javascript
// Producer
channel.sendToQueue("tasks", Buffer.from(JSON.stringify(task)));
// Consumer
channel.consume("tasks", (msg) => {
  /* process */
});
```

> 📘 Next: [Stateless Architecture](06-stateless-architecture.md)
