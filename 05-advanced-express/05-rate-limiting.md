# Rate Limiting

```bash
npm install express-rate-limit
```

```javascript
const rateLimit = require("express-rate-limit");
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 min
  max: 100,
});
app.use("/api/", limiter);
```

Protects against brute force and DDoS.

> 📘 Next: [CORS Deep Dive](06-cors-deep-dive.md)
