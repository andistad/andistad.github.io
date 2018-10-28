
$('#button').on('click', (event) => {
  $('ul').append(`<li>${$('#newItem').val()}</li>`);
  $('#newItem').val('');
});
