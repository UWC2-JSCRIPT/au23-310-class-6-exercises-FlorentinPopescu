$(document).ready(function() {

/**
 * Toggles "done" class on <li> element
 */

let listItems = $("ul li");

for (let i = 0; i <= listItems.length; i++) {
  $(listItems[i]).on("click", function() {
    $(listItems[i]).toggleClass('done');
  });
}

/**
 * Delete element when delete link clicked
 */

let listItemsA = $("ul li a");

for (let i = 0; i <= listItemsA.length; i++) {
  $(listItemsA[i]).on("click", function() {
    //$(listItemsA[i]).parent().remove();
    $(listItemsA[i]).parent().fadeOut("slow");
  });
}

/**
 * Adds new list item to <ul>
 */

const addListItem = function() {
  const text = $('input').val();
  $(".today-list").append(`<li><span>${text}</span><a class="delete">Delete</a></li>`);
  
  $("ul li").on("click", function(e) {
    e.preventDefault();
    $(this).toggleClass('done');
  })
  
  $(".delete").on("click", function(e) {
    e.preventDefault();
    //$(this).parent().remove();
    $(this).parent().fadeOut("slow");
  })
};

// add listener for add
$("div a").on('click', addListItem);

});
