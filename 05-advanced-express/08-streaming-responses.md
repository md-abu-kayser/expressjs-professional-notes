# Streaming Responses

```javascript
app.get("/large-file", (req, res) => {
  const readStream = fs.createReadStream("large.dat");
  readStream.pipe(res);
});
```

Useful for large payloads, avoids buffering entire response in memory.

> 📘 Next: **06-rest-api-design** – [REST Conventions](../06-rest-api-design/01-rest-conventions.md)
