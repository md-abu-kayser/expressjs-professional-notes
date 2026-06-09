# Sequelize and Knex Setup

## Sequelize

```bash
npm install sequelize pg pg-hstore
```

```javascript
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("database", "username", "password", {
  host: "localhost",
  dialect: "postgres",
});
```

## Knex

```bash
npm install knex pg
```

```javascript
const knex = require('knex')({
  client: 'pg',
  connection: { ... }
});
```

> 📘 Next: [Migrations & Seeds](03-migrations-seeds.md)
