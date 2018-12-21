const User = require('../models/UserModel');
const bcrypt = require('bcrypt');
const saltRounds = 10;

module.exports = {

  getAll: function(req, res) {
    User.find({})
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },

  getById: function(req, res) {
    const ID = req.params.id;
    User.find({ _id: ID })
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },

  getByEmail: function(req, res) {
    const email = req.params.email;
    User.find({ email: email })
      .then(data => res.json(data))
      .catch(err => res.json(err))
  },
  create: function(req, res) {
    validateAndCreate(req, res);
  },

  login: function(req, res) {
    validateAndLogin(req, res);
  },

  update: function(req, res) {
    res.json('Updating User');
  },

  delete: function(req, res) { 
    res.json('Deleting User');
  }
}

function validateAndCreate(req, res) {
  const DATA = req.body;

  User.find({ email: DATA.email })
    .then(data_from_db => {
      if (data_from_db.length > 0) { throw "User email already exists" }
      else { return bcrypt.hash(DATA.password, saltRounds) }
    })
    .then(hash => {
      DATA.password = hash;
      return User.create(DATA);
    })
    .then((user) => res.json(user))
    .catch(err => res.json(err))
}

function validateAndLogin(req, res) {
  const DATA = req.body;
  console.log(DATA);

  User.find({ email: DATA.email })
    .then(user => {
      console.log(user);
      if (user.length == 0) { throw "User email not found" }
      else { return bcrypt.compare(DATA.password, user.password) }
      })
    .then(res => {
      if (result == true) {
        console.log('success!');
        return true;
      }
      else {
        console.log('nopers....')
        return false;
      }
    })
    .catch(err => res.json(err))
}
    // bcrypt.hash(DATA.password, saltRounds)
    //   .then(hash => {
    //     DATA.password = hash;
    //   })
    //   .catch(err => console.log(err));