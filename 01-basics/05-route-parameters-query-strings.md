# Route Parameters & Query Strings

## Route Parameters

```javascript
app.get("/users/:userId", (req, res) => {
  console.log(req.params.userId);
});
app.get("/files/*", (req, res) => {
  console.log(req.params[0]); // wildcard
});
```

## Query Strings

`/search?q=express&page=2`

```javascript
app.get("/search", (req, res) => {
  console.log(req.query.q, req.query.page);
});
```

## Optional Parameters

Express does not have a built-in way; use regex or separate routes.

> 📘 Next: [HTTP Methods & Status Codes](06-http-methods-status-codes.md)
