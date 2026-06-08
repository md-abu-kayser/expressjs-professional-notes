# Popular Third-Party Middleware

- `morgan` – HTTP request logger
- `cors` – Cross-Origin Resource Sharing
- `helmet` – Security headers
- `compression` – Gzip compression
- `cookie-parser` – Parse cookies
- `express-rate-limit` – Rate limiting
- `express-session` – Session management

Install: `npm install morgan cors helmet compression cookie-parser`

```javascript
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(morgan("combined"));
```

> 📘 Next: [Route-level vs App-level](06-route-level-vs-app-level.md)
