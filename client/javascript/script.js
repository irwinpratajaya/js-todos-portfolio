$(document).ready(function() {
  getData()
});

function getData() {
  $.ajax({
    url:'http://localhost:3000/todos',
    type: 'GET',
    success: function(data) {
      data.forEach(function(data) {
        $("#title").append(`
          ${data.title} <p>${data.content}</p>
          `)
      })
      }
    }
  })
}
