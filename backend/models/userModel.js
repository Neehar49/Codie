let mongoose = require('mongoose');

// Updated connection string for localhost
mongoose.connect('mongodb://127.0.0.1:27017/codeIDE', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

let userSchema = new mongoose.Schema({
  name: String,
  username: String,
  email: String,
  password: String,
  date: {
    type: Date,
    default: Date.now
  },
  isBlocked: {
    type: Boolean,
    default: false
  },
  isAdmin: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model('User', userSchema); // 'User' is the name of the collection
