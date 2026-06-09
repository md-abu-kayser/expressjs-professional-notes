# Cache Invalidation

Hard problem: remove stale data.

- **Key deletion**: when data changes, delete cache key.
- **Bulk invalidation**: pattern like `del user:*` (supported by Redis SCAN).
- **Time-based**: set TTL; data eventually expires.

Implement hook on data update to delete related caches.

> 📘 Next: **04-authentication-authorization** – [Password Hashing](../04-authentication-authorization/01-password-hashing-bcrypt.md)
