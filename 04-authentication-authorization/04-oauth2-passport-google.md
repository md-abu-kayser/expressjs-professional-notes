# OAuth2 with Passport (Google Strategy)

```bash
npm install passport passport-google-oauth20
```

```javascript
passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/auth/google/callback",
    },
    (accessToken, refreshToken, profile, done) => {
      // find or create user
      done(null, user);
    },
  ),
);
```

Routes: `/auth/google`, `/auth/google/callback`.

> 📘 Next: [Role-Based Access Control](05-role-based-access-control.md)
