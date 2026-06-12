# CI/CD with GitHub Actions

```yaml
name: Deploy
on: push
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npm test
      - name: Build and push Docker image
        ...
      - name: Deploy to server
        ...
```

> 📘 Next: **12-scaling-strategies** – [Vertical vs Horizontal Scaling](../12-scaling-strategies/01-vertical-vs-horizontal-scaling.md)
