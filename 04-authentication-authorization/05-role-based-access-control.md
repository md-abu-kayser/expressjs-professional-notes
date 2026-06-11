# Role-Based Access Control (RBAC)

Define roles (`admin`, `editor`, `viewer`) and middleware:

```javascript
function authorize(...roles) {
  return (req, res, next) => {
    if (!roles.includes(req.user.role))
      return res.status(403).send("Forbidden");
    next();
  };
}
app.delete("/users/:id", authMiddleware, authorize("admin"), handler);
```

> 📘 Next: [API Keys](06-api-keys.md)
