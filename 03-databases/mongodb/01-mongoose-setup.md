# Mongoose Setup with Express

Mongoose is an ODM for MongoDB.

## Installation

```bash
npm install mongoose
```

## Connection

```javascript
const mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => console.log("Connected to MongoDB"));
```

## Environment Variable

MONGODB_URI=mongodb://localhost:27017/mydb

> 📘 Next: [Schema Design](02-schema-design.md)
