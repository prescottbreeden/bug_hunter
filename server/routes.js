const bugs = require('./controllers/BugControllers');
const users = require('./controllers/UserControllers');
module.exports = function(app) {

  app.get('/validate', users.login);
  app
    .get('/api/users', users.getAll)
    .get('/api/users/email/:email', users.getByEmail)
    .get('/api/users/id/:id', users.getById)
    .post('/api/users', users.create)
    .put('/api/users', users.update)
    .delete('/api/users', users.delete)

    .get('/api/bugs', bugs.getAll)
    .get('/api/bugs/:id', bugs.getOne)
    .post('/api/bugs', bugs.create)
    .put('/api/bugs', bugs.update)
    .delete('/api/bugs', bugs.delete)

}
