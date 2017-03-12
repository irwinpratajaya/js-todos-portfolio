const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = Schema({
  title: String,
  content: String,
  completed: Boolean
}, {
  timestamps: true
})

var todo = mongoose.model('todo', todoSchema );

module.exports = todo
