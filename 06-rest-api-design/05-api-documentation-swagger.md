# API Documentation with Swagger

Use `swagger-jsdoc` and `swagger-ui-express`.

```javascript
const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
```

Generate OpenAPI specification from JSDoc comments.

> 📘 Next: [GraphQL with Express](06-graphql-with-express.md)
