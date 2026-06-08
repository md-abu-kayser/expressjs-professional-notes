# CRUD Operations with Mongoose

## Create

```javascript
const user = await User.create({ name: "John", email: "john@example.com" });
```

## Read

```javascript
const users = await User.find({ age: { $gte: 18 } });
const user = await User.findById(id);
```

## Update

```javascript
await User.updateOne({ _id: id }, { $set: { name: "Jane" } });
// or findOneAndUpdate
```

## Delete

```javascript
await User.deleteOne({ _id: id });
```

## Query Helpers

Chain `.sort()`, `.select()`, `.limit()`, `.skip()`.

> 📘 Next: [Indexing](04-indexing.md)
