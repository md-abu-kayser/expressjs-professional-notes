# Integration Testing with Supertest

```javascript
const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("responds with json", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe("Hello World");
  });
});
```

> 📘 Next: [Mocking & Spying](03-mocking-spying.md)
