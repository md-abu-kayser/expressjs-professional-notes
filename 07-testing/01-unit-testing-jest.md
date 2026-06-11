# Unit Testing with Jest

```bash
npm install --save-dev jest supertest
```

Example:

```javascript
test("adds 1+2 to equal 3", () => {
  expect(1 + 2).toBe(3);
});
```

For Express, test controllers/services in isolation.

> 📘 Next: [Integration Testing with Supertest](02-integration-testing-supertest.md)
