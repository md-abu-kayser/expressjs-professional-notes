# Health Checks Endpoint

```javascript
app.get("/health", (req, res) => {
  res.status(200).json({ status: "UP", timestamp: new Date() });
});
```

Used by load balancers and orchestrators.

> 📘 Next: [APM (Elastic, New Relic)](04-apm-elastic-newrelic.md)
