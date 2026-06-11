# Express Sessions & Cookies

```bash
npm install express-session
```

```javascript
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 60000 },
  }),
);
```

Stores session data on the server (defaults to memory, use Redis in production).

> 📘 Next: [File Uploads with Multer](03-file-uploads-multer.md)
