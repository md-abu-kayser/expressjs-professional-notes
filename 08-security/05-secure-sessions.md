# Secure Sessions

- Set cookie `secure: true` in production (HTTPS only).
- Use `httpOnly` and `sameSite` attributes.
- Rotate session secret.
- Store session data in Redis, not memory.

> 📘 Next: [HTTPS & TLS Termination](06-https-tls-termination.md)
