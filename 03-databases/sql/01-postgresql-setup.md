# PostgreSQL Setup with Express

## Drivers

- `pg` - basic driver
- `knex` - query builder
- `sequelize` - ORM

## Example with `pg`

```javascript
const { Pool } = require("pg");
const pool = new Pool({
  host: "localhost",
  database: "mydb",
  user: "user",
  password: "pass",
});
const result = await pool.query("SELECT * FROM users");
```

> 📘 Next: [Sequelize / Knex Setup](02-sequelize-knex-setup.md)
