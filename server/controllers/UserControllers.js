module.exports = {

  home: function(req, res) {
    res.json('still works');
  },

  getAllUsers: function(req, res) {
    res.json('Getting all users');
  },

  getOneUser: function(req, res) {
    res.json('Getting one user');
  },

  createUser: function(req, res) {
    res.json('Create new user');
  },

  updateUser: function(req, res) {
    res.json('Updating User');
  },

  deleteUser: function(req, res) { 
    res.json('Deleting User');
  }
}
