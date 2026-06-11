# Session vs JWT

| Session                                   | JWT                    |
| ----------------------------------------- | ---------------------- |
| Stateful (server-side)                    | Stateless              |
| Cookie-based                              | Token in header        |
| Revocable                                 | No built-in revocation |
| Scalability requires shared session store | Scalable by design     |

Choose based on requirements. JWT is popular for REST APIs.

> 📘 Next: [JWT Authentication](03-jwt-authentication.md)
