const bugs = require('./controllers/BugControllers');
const users = require('./controllers/UserControllers');
module.exports = function(app) {

  app
    .get('/', users.home)
    .get('/api/users', users.getAllUsers)
    .get('/api/users/:id', users.getOneUser)
    .put('/api/users', users.updateUser)
    .delete('/api/users', users.deleteUser)

    .get('/api/bugs', bugs.getAllBugs)
    .get('/api/bugs/:id', bugs.getOneBug)
    .post('/api/bugs', bugs.createBug)
    .put('/api/bugs', bugs.updateBug)
    .delete('/api/bugs', bugs.deleteBug)

}
