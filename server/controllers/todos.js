var todo = require('../models/todos')

var todos = {}

todos.getTodos = function (req,res,next) {
  todo.find({}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

todos.getTodo = function (req,res,next) {
  todo.find({_id:req.params.id}).then(function(err, data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

todos.createTodo = function (req,res,next) {
  todo.create({
    title: req.body.title,
    content: req.body.content,
    completed: false
  }).then (function (data) {
    res.json(data)
  })
}

todos.updateTodo = function (req,res,next) {
  todo.update({
    _id: req.params.id
  },{
    $set: req.body
  }).then(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json(data)
    }
  })
}

todos.deleteTodo = function (req,res,next) {
  todo.find({_id:req.params.id}).remove(function(err,data) {
    if (err) {
      res.json(err)
    } else {
      res.json (`data id:${req.params.id} \nhas been deleted`)
    }
  })
}

module.exports = todos
