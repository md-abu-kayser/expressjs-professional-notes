# HTTP Methods & Status Codes

## Common Methods

- `GET` – retrieve
- `POST` – create
- `PUT` – full update
- `PATCH` – partial update
- `DELETE` – delete

## Status Codes

- `200` OK
- `201` Created
- `204` No Content
- `400` Bad Request
- `401` Unauthorized
- `403` Forbidden
- `404` Not Found
- `500` Internal Server Error

## Express Usage

```javascript
res.status(201).json({ id: newUser._id });
```

Always set proper status codes for API endpoints.

> 📘 Next: [Static Files Serving](07-static-files-serving.md)
