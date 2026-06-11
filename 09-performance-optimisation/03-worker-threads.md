# Worker Threads for CPU-Intensive Tasks

Offload heavy computation from the event loop.

```javascript
const { Worker } = require("worker_threads");
const worker = new Worker("./worker.js", { workerData: { n: 40 } });
worker.on("message", (result) => console.log(result));
```

> 📘 Next: [Load Testing with Artillery](04-load-testing-artillery.md)
