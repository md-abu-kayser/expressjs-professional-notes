# Template Engines (EJS & Pug)

Express supports multiple template engines.

## EJS

- Embedded JavaScript
- Similar to HTML with `<%= %>` tags.
- Setup: `npm install ejs`

```javascript
app.set("view engine", "ejs");
app.set("views", "./views");
app.get("/", (req, res) => res.render("index", { title: "Home" }));
```

## Pug (formerly Jade)

- White-space sensitive syntax.
- Setup: `npm install pug`

```javascript
app.set("view engine", "pug");
```

## Common Usage

- Server-side rendering (SSR)
- Email templates
- Not as common for REST APIs (prefer JSON responses).

> 📘 Next: [Error Handling Basics](09-error-handling-basics.md)
