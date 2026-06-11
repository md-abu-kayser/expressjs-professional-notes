# XSS and CSRF Protection

- XSS: escape output, set Content-Security-Policy (via helmet).
- CSRF: use CSRF tokens with `csurf` (or double submit cookie pattern).

```bash
npm install csurf
```

```javascript
const csrf = require("csurf");
app.use(csrf({ cookie: true }));
```

> 📘 Next: [SQL Injection Prevention](03-sql-injection-prevention.md)
