# Mocking and Spying with Jest

```javascript
jest.mock("../models/user");
const User = require("../models/user");
User.findById.mockResolvedValue({ name: "Test" });
```

Spy on functions to verify calls.

> 📘 Next: [Test Coverage](04-test-coverage.md)
