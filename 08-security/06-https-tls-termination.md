# HTTPS & TLS Termination

- Obtain SSL certificates (Let’s Encrypt).
- Terminate TLS at reverse proxy (Nginx) and forward HTTP to Express.
- Or use `https` module directly:

```javascript
https.createServer({ key, cert }, app).listen(443);
```

Always enforce HTTPS in production.

> 📘 Next: [Dependency Auditing](07-dependency-auditing.md)
