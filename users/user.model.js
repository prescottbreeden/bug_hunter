const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comments = new Schema({
  content: String,
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
}, { timestamps: true });

const Bugs = new Schema({
  title: String,
  likes: Number,
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  comments: [{body: "string", by: mongoose.Schema.Types.ObjectId}],
}, { timestamps: true });

const Users = new Schema({
  username: { type: String, required: true },
  hash: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true });

// Users.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', Users);
