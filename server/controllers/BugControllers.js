module.exports = {

  getAllBugs: function(req, res) {
    res.json('Getting all bugs');
  },

  getOneBug: function(req, res) {
    res.json('Getting one bug');
  },

  createBug: function(req, res) {
    res.json('Creating new bug');
  },

  updateBug: function(req, res) {
    res.json('Updating bug');
  },

  deleteBug: function(req, res) {
    res.json('Deleting bug');
  }
}
