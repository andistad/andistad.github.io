// Create an array with your neighbours' (at your table) names and yours
//Using forEach add each name to the <ul> list
//(Optional) Your name should be bold

let neighbours = ['Michal', 'Jirka', 'Andrea'];
neighbours.forEach(name => {
  
  if (name === 'Andrea') {
    
    $('ul').append(`<li id='andrea'>${name}</li>`);
    $('#andrea').css('font-weight', 'bold');
    
  } else {
    $('ul').append(`<li>${name}</li>`);
  }
});

/* "Added with javascript"
//Add a new block at the end of the page, the title should
be in a heading, the text should be in a paragraph block
*/

let additionalBlock = {
  title: "Added with javascript",
  text: "This block was added using javascript's jQuery framework. How awesome!"
};
$('#body').append(`<h2>${additionalBlock['title']}</h2>`);
$('#body').append(`<p>${additionalBlock['text']}</p>`);