module.exports = {

  getAll: function(req, res) {
    res.json('Getting all bugs');
  },

  getOne: function(req, res) {
    res.json('Getting one bug');
  },

  create: function(req, res) {
    res.json('Creating new bug');
  },

  update: function(req, res) {
    res.json('Updating bug');
  },

  delete: function(req, res) {
    res.json('Deleting bug');
  }
}
