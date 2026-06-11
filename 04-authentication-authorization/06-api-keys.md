# API Keys

Simple authentication for machine-to-machine.

- Store API keys in database.
- Validate via header: `x-api-key`.
- Middleware checks key against DB.

Not as secure as JWT; use HTTPS.

> 📘 Next: [Two-Factor Auth](07-two-factor-auth.md)
