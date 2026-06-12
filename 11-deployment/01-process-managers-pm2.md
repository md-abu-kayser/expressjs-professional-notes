# PM2 for Production

```bash
pm2 start app.js -i max --name my-api
pm2 save
pm2 startup
```

Config via `ecosystem.config.js`.

> 📘 Next: [Dockerising Express](02-dockerising-express.md)
