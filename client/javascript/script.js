$(document).ready(function() {
  getData()
});

function getData() {
  $.ajax({
    type: 'GET',
    url: 'http://localhost:3000/todos',
    success: function(data){
      data.forEach(function(data){
      $('#todos').append(`
        <tbody>
          <tr id='todo-${data._id}'>
            <td>${data.title}</td>
            <td>${data.content}</td>
            <td>${data.completed}</td>
            <td><a href="#" class="btn btn-info">done</a>
               <a href="#" onclick="deleteTodo('${data._id}')" class="btn btn-danger">delete</a> </td>
            </tr>
        </tbody>
      `)
      })
    }
  })
}

function createTodo() {
  $.ajax({
    type: 'POST',
    url: 'http://localhost:3000/todos',
    data: {
      title: $('input[name="title"]').val(),
      content: $('input[name="content"]').val()
    },
    success: function(data){
      $('#title').val("")
      $('#content').val("")
      $('#todos').append(`
        <tbody>
          <tr id='todo-${data._id}'>
            <td>${data.title}</td>
            <td>${data.content}</td>
            <td>${data.completed}</td>
            <td><a href="#" class="btn btn-info">done</a>
               <a href="#" onclick="deleteTodo('${data._id}')" class="btn btn-danger">delete</a> </td>
            </tr>
        </tbody>
      `)
    }
  })
}

function deleteTodo(id) {
  $.ajax({
    type: 'DELETE',
    url: `http://localhost:3000/todos/${id}`,
    success: function(result) {
      $(`#todo-${id}`).remove()
    }
  })
}
