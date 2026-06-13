// Pagination Helper

```javascript
module.exports = (query) => {
  const page = parseInt(query.page) || 1;
  const limit = parseInt(query.limit) || 10;
  return { skip: (page - 1) * limit, limit, page };
};
```;
