# Realtime Chat – Code Walkthrough

Socket.io setup:

```javascript
const server = require('http').createServer(app);
const io = require('socket.io')(server);
io.on('connection', socket => { ... });
```

Handling events, rooms, and authentication.

> 📘 Next: [Scaling Notes](scaling-notes.md)
