# Route-Level vs App-Level Middleware

## App-Level

`app.use(...)` applies to every request.

```javascript
app.use(logger);
```

## Route-Level

Apply to specific paths or routers:

```javascript
app.use("/api", apiRouter);
apiRouter.use(authMiddleware);
```

## Single Route

```javascript
app.get('/profile', authMiddleware, (req, res) => { ... });
```

Use route-level for more granular control.

> 📘 Next: **03-databases** – [MongoDB Setup](../03-databases/mongodb/01-mongoose-setup.md)
