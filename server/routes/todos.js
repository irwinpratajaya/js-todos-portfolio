var express = require('express');
var router = express.Router();
var todos = require('../controllers/todos')

/* GET home page. */
router.get('/', todos.getTodos)

router.get('/:id', todos.getTodo)

router.post('/', todos.createTodo)

router.delete('/:id', todos.deleteTodo)

router.put('/:id', todos.updateTodo)


module.exports = router;
