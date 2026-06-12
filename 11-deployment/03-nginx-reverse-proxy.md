# Nginx as Reverse Proxy

```
server {
    listen 80;
    server_name example.com;
    location / {
        proxy_pass http://localhost:3000;
    }
}
```

Handles static files, SSL termination, and load balancing.

> 📘 Next: [AWS EC2 Deployment](04-aws-ec2-deployment.md)
