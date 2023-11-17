$(document).ready(function() {

// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

let buyEl = $("<a></a>").text("Buy Now!"); 
$("p").after(buyEl);
$(buyEl).attr("id", "cta");

// Access (read) the data-color attribute of the <img>,
// log to the console
let colorImg = $("img").attr("data-color");
console.log(colorImg);

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

let listItems = $("ul li");
for (let i = 0; i <= listItems.length; i++) {
    if($(listItems[i]).text() == "Turbocharged") {
        $(listItems[i]).attr("class", "highlight");
    }
}

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

$("p").last().remove();

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"

buyEl.on( "click", function() {
    buyEl.remove();
    let addToCard = $("<p></p>").text("Added to cart");
    $("ul").after(addToCard);
  });

});
