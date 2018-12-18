const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/bug_hunter', 
                { useNewUrlParser: true })
        .then(()=> console.log("database connected"))
        .catch((err)=> console.log(err))

const UserSchema = new mongoose.Schema({
  username: { type: String },
  email: { type: String },
  password: { type: String },
}, {timestamps: true})

module.exports = mongoose.model('User', UserSchema);