# Dockerising an Express App

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "app.js"]
```

Use `docker build -t myapp .` and `docker run -p 3000:3000 myapp`.

> 📘 Next: [Nginx Reverse Proxy](03-nginx-reverse-proxy.md)
