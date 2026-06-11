# Request Validation with Joi

```bash
npm install joi
```

```javascript
const Joi = require("joi");
const schema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
});
const { error } = schema.validate(req.body);
if (error) return res.status(400).json({ error: error.details[0].message });
```

> 📘 Next: [Rate Limiting](05-rate-limiting.md)
