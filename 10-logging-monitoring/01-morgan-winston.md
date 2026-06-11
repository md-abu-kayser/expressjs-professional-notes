# Morgan & Winston for Logging

```bash
npm install morgan winston
```

```javascript
const morgan = require('morgan');
const winston = require('winston');
const logger = winston.createLogger({ ... });
app.use(morgan('combined', { stream: { write: message => logger.info(message) } }));
```

> 📘 Next: [Structured Logging](02-structured-logging.md)
