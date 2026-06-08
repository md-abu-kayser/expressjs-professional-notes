# Aggregation Pipeline

```javascript
const result = await User.aggregate([
  { $match: { age: { $gte: 18 } } },
  { $group: { _id: "$city", count: { $sum: 1 } } },
  { $sort: { count: -1 } },
]);
```

Useful for reports, analytics, and complex data transformations.

> 📘 Next: [Transactions](06-transactions.md)
