# Caching Strategies

- **Cache-aside**: app checks cache before DB; write to cache after DB.
- **Write-through**: write to cache then DB (consistent but slow).
- **Write-behind**: write to cache, async write to DB.
- **TTL (time-to-live)**: set expiration.

Example middleware for cache-aside:

```javascript
async function cacheMiddleware(req, res, next) {
  const key = req.originalUrl;
  const cached = await redis.get(key);
  if (cached) return res.json(JSON.parse(cached));
  res.sendResponse = res.json;
  res.json = (body) => {
    redis.set(key, JSON.stringify(body), "EX", 60);
    res.sendResponse(body);
  };
  next();
}
```

> 📘 Next: [Cache Invalidation](03-cache-invalidation.md)
