# Mongoose Schema Design

```javascript
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, lowercase: true },
  age: { type: Number, min: 0 },
  createdAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("User", userSchema);
```

## Best Practices

- Keep schemas flat when possible.
- Use embedded documents for data that is fetched together.
- Use references (`ref`) for related data with separate lifecycle.
- Add timestamps: `{ timestamps: true }`

> 📘 Next: [CRUD Operations](03-crud-operations.md)
