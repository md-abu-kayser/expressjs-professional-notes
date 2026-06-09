# Connection Pooling

Database connections are expensive. Use pooling to reuse connections.

## With `pg`

```javascript
const pool = new Pool({ max: 20, idleTimeoutMillis: 30000 });
const client = await pool.connect();
try {
  const res = await client.query("...");
} finally {
  client.release();
}
```

## Sequelize/Knex

Pool configuration inside options.

Always release connections to avoid leaks.

> 📘 Next: **Cache** – [Redis Setup](../cache/01-redis-setup.md)
