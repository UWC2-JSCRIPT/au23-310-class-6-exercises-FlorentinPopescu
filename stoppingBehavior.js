// Do not change
document.getElementById('cat').addEventListener('click', () => {
  alert('meow!');
});


// When clicked, "More info" link should alert "Here's some info"
// instead of going to a new webpage

/* ------- jQuery -----------*/ 
let moreInfo = $("#more-info").removeAttr("href");
moreInfo.on( "click", (e) => {
  e.preventDefault();
  alert("Here's some info");
  e.stopPropagation();
});

/* ------- Javascript -------*/
/*
document.getElementById("more-info").removeAttribute('href');
let moreInfo = document.getElementById("more-info");

moreInfo.addEventListener('click', (e) => {
  e.preventDefault();
  alert("Here's some info");
  e.stopPropagation();
}, false);
*/


// When the bark button is clicked, should alert "Bow wow!"
// Should *not* alert "meow"

/* ------- jQuery -----------*/
$("#dog").on("click", (e) => {
  e.preventDefault();
  alert('Bow wow!');
  e.stopPropagation();
});

/* ------- Javascript -------*/
/*
document.getElementById('dog').addEventListener('click', (e) => {
  e.preventDefault();
  alert('Bow wow!');
  e.stopPropagation();
});
*/
