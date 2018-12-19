const config = require('../config.json');
const mongoose = require('mongoose');
// mongoose.connect(process.env.MONGODB_URI || config.connectionString);
mongoose.connect('mongodb://localhost:27017/bug_hunter', 
                { useNewUrlParser: true })
        .then(()=> console.log("database connected"))
        .catch((err)=> console.log(err))
mongoose.Promise = global.Promise;

module.exports = {
  User: require('../users/user.model'),
};
