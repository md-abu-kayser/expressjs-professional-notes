# Load Balancing with Nginx / HAProxy

Nginx upstream block distributes requests across multiple Express instances.

```
upstream app_servers {
    server localhost:3001;
    server localhost:3002;
}
```

HAProxy provides similar functionality with richer algorithms.

> 📘 Next: [Database Sharding & Replication](03-database-sharding-replication.md)
