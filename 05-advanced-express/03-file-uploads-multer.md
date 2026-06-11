# File Uploads using Multer

```bash
npm install multer
```

```javascript
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
app.post("/upload", upload.single("avatar"), (req, res) => {
  console.log(req.file);
});
```

Options: limit file size, filter types, store in memory/S3.

> 📘 Next: [Request Validation with Joi](04-request-validation-joi.md)
