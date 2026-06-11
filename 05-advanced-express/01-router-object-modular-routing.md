# Router Object & Modular Routing

```javascript
// users.routes.js
const router = express.Router();
router.get("/", listUsers);
router.post("/", createUser);
module.exports = router;

// app.js
app.use("/api/users", require("./routes/users"));
```

Keeps code organized and scalable.

> 📘 Next: [Express Sessions & Cookies](02-express-session-cookies.md)
