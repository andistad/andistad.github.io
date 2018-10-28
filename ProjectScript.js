$('#button').on('click', (event) => {
  $('#posts').prepend(`<div class="post">
  <div class="postTitle">${$('#newTitle').val()}</div>
  <div class="postText">${$('#newContent').val()}</div></div>`);
});


