const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  username: { type: String, required: true },
  hash: { type: String, required: true },
  email: { type: String, required: true },
}, { timestamps: true })

schema.set('toJSON', { virtuals: true });

module.exports = mongoose.model('User', schema);
