# Password Hashing with bcrypt

```bash
npm install bcrypt
```

```javascript
const bcrypt = require("bcrypt");
const saltRounds = 12;

// Hash password
const hash = await bcrypt.hash(password, saltRounds);

// Compare
const match = await bcrypt.compare(inputPassword, storedHash);
```

Never store plain-text passwords. Use bcrypt with sufficient salt rounds.

> 📘 Next: [Session vs JWT](02-session-vs-jwt.md)
