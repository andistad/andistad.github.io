let number = 0;
$('#button').on('click', (event) => {
  number = number + 1;
  $('#number').text(number);
});

/* 
let path = `posts/${counter}`;
let initialData = {title: "", text: ""
}
fb.ref('posts').once('value').then(data => {let savePosts = data.val(); savedPosts.forEach})

savedPosts.forEach(post => {
  $('body').append(`
 <h1>${post.title}</h1>
 <p>${post.title}</p>
  `);
});
*/