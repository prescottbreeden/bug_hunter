const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const dbConnection = mysql.createConnection({
  host: 'localhost',
  user: 'trashpanda',
  password: 'rubberbabbybuggybumpers',
  database: 'bug_hunter'  
});

module.exports = {
  authenticate,
  getAll,
  getById,
  create,
  // update,
  // delete: _delete,
};

async function authenticate({ username, password }) {
  const user = await User.findOne({ username });
  if (user && bcrypt.compareSync(password, user.hash)) {
    const { hash, ...userWithoutHash } = user.toObject();
    const token = jwt.sign({ sub: user.id }, config.secret);
    return {
      ...userWithoutHash,
      token
    };
  }
}

async function getAll() { 
  let q = 'SELECT * FROM users where user_id = 1;';
  return await dbConnection.query(q);
}

async function getById(id) {
  return await User.findById(id).select('-hash');
}

async function create(userParam) {
  //validate
  if (await User.findOne({ username: userParam.username })) {
    throw 'Username "' + userParam.username + '" is already taken';
  }

  const user = new User(userParam);

  // hash password
  if (userParam.password) {
    user.hash = bcrypt.hashSync(userParam.password, 10);
  }

  // save user
  await user.save();
}


