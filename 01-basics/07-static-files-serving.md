# Serving Static Files

```javascript
app.use(express.static("public"));
// Now all files in public/ are served
// Example: public/style.css → http://localhost:3000/style.css
```

## Multiple Directories

```javascript
app.use(express.static("public"));
app.use(express.static("assets"));
```

## Virtual Path Prefix

```javascript
app.use("/static", express.static("public"));
// Accessible via /static/style.css
```

## Cache Control

Static files are cached by default; you can set `maxAge`:

```javascript
app.use(express.static("public", { maxAge: "1d" }));
```

> 📘 Next: [Template Engines](08-template-engines-ejs-pug.md)
