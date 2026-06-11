# CORS (Cross-Origin Resource Sharing)

```bash
npm install cors
```

```javascript
const cors = require("cors");
// Allow all
app.use(cors());
// Specific origin
app.use(cors({ origin: "https://example.com" }));
// Dynamic origin
app.use(
  cors({
    origin: function (origin, callback) {
      if (whitelist.indexOf(origin) !== -1) callback(null, true);
      else callback(new Error("Not allowed"));
    },
  }),
);
```

> 📘 Next: [Compression](07-compression.md)
