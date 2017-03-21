const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// var autoIncrement = require('mongoose-auto-increment');
// var connection = mongoose.createConnection("mongodb://localhost/todo");

// autoIncrement.initialize(connection);

let todoSchema = Schema({
  // todoId: Number,
  title: String,
  content: String,
  completed: Boolean
}, {
  timestamps: true
})

var todo = mongoose.model('todo', todoSchema );

// todoSchema.plugin(autoIncrement.plugin, 'todos');
// todoSchema.plugin(autoIncrement.plugin, { model: 'todo', field: 'todoId' });

module.exports = todo
