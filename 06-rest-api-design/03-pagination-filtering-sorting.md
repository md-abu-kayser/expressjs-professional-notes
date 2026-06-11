# Pagination, Filtering, and Sorting

## Pagination

```javascript
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const skip = (page - 1) * limit;
const results = await User.find().skip(skip).limit(limit);
```

## Filtering

`?role=admin&age[gte]=18`

## Sorting

`?sort=-createdAt` (descending) or `?sort=name` (ascending)

> 📘 Next: [HATEOAS](04-hateoas.md)
