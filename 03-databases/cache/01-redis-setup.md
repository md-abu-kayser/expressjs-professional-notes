# Redis Setup with Express

```bash
npm install ioredis
```

```javascript
const Redis = require("ioredis");
const redis = new Redis();
redis.set("key", "value");
const val = await redis.get("key");
```

Redis is used for caching, sessions, rate limiting, and pub/sub.

> 📘 Next: [Caching Strategies](02-caching-strategies.md)
