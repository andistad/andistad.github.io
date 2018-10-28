// exercise02

let myStyle = {color: 'purple', background: 'white', fontSize: '100px'};
/* $('.north').css(myStyle)
$('#northText').text('Cool')*/

let backgroundColor = 'green';
if (backgroundColor !== 'purple') {
  $('.north').css('background', 'purple')
};

let number = 10;
if (number > 100) {
  $('#northText').text(`whoah, that's a big number`)
} else {
  $('#northText').text(`just a regular number, please.`)
};

//Change the text to Power of DOM of the third if the word is cool, otherwise change the fourth one
let cool = 'cool';
if (cool === true) {
  $('.south').text(`Power of DOM`)
} else {
  $('.west').text(`Power of DOM`)
};

