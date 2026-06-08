# Transactions with Mongoose

Since MongoDB 4.0+ with replica sets.

```javascript
const session = await mongoose.startSession();
session.startTransaction();
try {
  await Order.create([{ product: "Book", quantity: 1 }], { session });
  await Inventory.updateOne(
    { product: "Book" },
    { $inc: { stock: -1 } },
    { session },
  );
  await session.commitTransaction();
} catch (error) {
  await session.abortTransaction();
} finally {
  session.endSession();
}
```

> 📘 Next: **SQL** – [PostgreSQL Setup](../sql/01-postgresql-setup.md)
