# JWT Authentication

```bash
npm install jsonwebtoken
```

```javascript
const jwt = require("jsonwebtoken");
const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, {
  expiresIn: "1h",
});
res.json({ token });
```

Middleware to verify:

```javascript
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).send("Unauthorized");
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (err) {
    res.status(401).send("Invalid token");
  }
}
```

> 📘 Next: [OAuth2 & Passport Google](04-oauth2-passport-google.md)
