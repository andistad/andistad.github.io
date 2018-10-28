// Initialize Firebase
var config = {
  apiKey: "AIzaSyBBrbhWNcRAuhnKOcKKtC7o2USkZRJ0rxY",
  authDomain: "recipes-by-andrea.firebaseapp.com",
  databaseURL: "https://recipes-by-andrea.firebaseio.com",
  projectId: "recipes-by-andrea",
  storageBucket: "recipes-by-andrea.appspot.com",
  messagingSenderId: "271399332734"
};

firebase.initializeApp(config);
fb = firebase.database();

fb.ref("posts").once('value').then(data => {
  let savedPosts = data.val();
  savedPosts.forEach (titleAndText => {($('#posts').prepend(`<div class="post">
  <div class="postTitle">${title}</div>
  <div class="postText">${content}</div></div>`))});
});

let number = 0;
$('#button').on('click', (event) => {
  $('#posts').prepend(`<div class="post">
  <div class="postTitle">${$('#newTitle').val()}</div>
  <div class="postText">${$('#newContent').val()}</div></div>`);
  let title = $('#newTitle').val();
  let content = $('#newContent').val();

  let path = `posts/${number}`;
  number = number + 1;

  let dataToSave = {
    title: title,
    text: content
  };
  
  fb.ref(path).set(dataToSave);
});

