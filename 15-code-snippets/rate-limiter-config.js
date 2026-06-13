// Rate Limiter Config

```javascript
const rateLimit = require('express-rate-limit');
exports.apiLimiter = rateLimit({ windowMs: 15*60*1000, max: 100 });
```;
