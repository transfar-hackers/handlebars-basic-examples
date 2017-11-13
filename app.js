require('./style.css')
const handlebars = require('handlebars')

var bookListingTemplate = require("./book-listing.handlebars");

document.addEventListener("DOMContentLoaded", function() {
  var div = document.createElement('div');
  div.innerHTML = bookListingTemplate({
    user: {
      name: "Jack Sparrow",
      status: ["leaving"]
    },
    info: "Your books are due next Tuesday",
    books: [{
      title: "A book",
      synopsis: "With a description"
    }, {
      title: "Another book",
      synopsis: "From a very good author"
    }, {
      title: "Book without synopsis"
    }],
    people: {
      greeting: 'hello world!'
    }
  });
  document.body.appendChild(div);
});
