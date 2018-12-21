const userController = require('./users/users.controller');

module.exports = function(app) {

  app
    .get('/api/users', userController.getAll)

}