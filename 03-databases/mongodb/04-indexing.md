# Indexing in MongoDB

Create indexes to speed up queries.

## Defining in Schema

```javascript
const userSchema = new mongoose.Schema({
  email: { type: String, index: true, unique: true },
});
```

## Compound Index

```javascript
userSchema.index({ email: 1, createdAt: -1 });
```

## Creating Index Programmatically

`User.createIndexes()`

## Tip

Use `explain()` to see if an index is used. Avoid over-indexing (impacts write performance).

> 📘 Next: [Aggregation Pipeline](05-aggregation-pipeline.md)
