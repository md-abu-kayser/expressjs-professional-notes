# GraphQL with Express

```bash
npm install express-graphql graphql
```

```javascript
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema");
app.use("/graphql", graphqlHTTP({ schema, graphiql: true }));
```

Single endpoint, query language for APIs.

> 📘 Next: **07-testing** – [Unit Testing with Jest](../07-testing/01-unit-testing-jest.md)
