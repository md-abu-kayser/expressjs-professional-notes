# HATEOAS (Hypermedia as the Engine of Application State)

Include links in responses:

```json
{
  "id": 1,
  "name": "John",
  "_links": {
    "self": { "href": "/users/1" },
    "posts": { "href": "/users/1/posts" }
  }
}
```

Helps API discoverability.

> 📘 Next: [API Documentation with Swagger](05-api-documentation-swagger.md)
