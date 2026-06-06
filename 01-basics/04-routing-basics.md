# Routing Basics

Routes define how an app responds to client requests.

## Basic Route

```javascript
app.get('/users', (req, res) => { ... });
app.post('/users', (req, res) => { ... });
app.put('/users/:id', (req, res) => { ... });
app.delete('/users/:id', (req, res) => { ... });
```

## `app.route()`

Chainable route handlers for a single path:

```javascript
app.route('/items')
  .get((req, res) => { ... })
  .post((req, res) => { ... });
```

## Router Object

See [Router Object](../05-advanced-express/01-router-object-modular-routing.md).

## Route Order

Routes are matched in the order they are defined; first match wins.

> 📘 Next: [Route Parameters & Query Strings](05-route-parameters-query-strings.md)
