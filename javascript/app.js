// What do you have?
//   - jQuery to make AJAX requests to an API
//   - jQuery to work with the DOM
//   - Some existing HTML with placeholder information (.result-card)
//   - An API endpoint that has data for me "https://api.tvmaze.com/search/shows?q="
//   - A reference to how to use that API: "https://www.tvmaze.com/api#show-search"

// What do you need?
// When the user clicks the search button, the following needs to happen afterwards:
//     1. I need to take the text they typed in the input box
//     2. I need to get the TV show information based on what the user typed in: "https://api.tvmaze.com/search/shows?q=[SEARCH_STRING]"
//     2. I need to display that information using the .result-card html as a template

// How do you get there?
// I need to use this API endpoint: "https://api.tvmaze.com/search/shows?q="
// I can use the URL bar in my web browser to see what comes back when I visit an end point, e.g."https://api.tvmaze.com/search/shows?q=lost"
// I need to handle a click event on the search button
// I need to get the user information from the input box
// I need to use $.get to make an AJAX request to the endpoint with the user search info, e.g. "https://api.tvmaze.com/search/shows?q=lost"
// I need to use jQuery to recreate the .result-card html and all of it's nested elements
// I need to go through the data sent from the AJAX request and create a result card for each TV show
// I need to add each result card to the #results element.

const $textBox = $("#textBox");

//   $.get("https://api.tvmaze.com/search/shows?q=breaking%20bad", (data) => {
//   console.log(data);
//   //   var results = JSON.parse(data); // The data comes to us in JSON format, it must be parsed in to a object that we can use
//   console.log(results);

// });

function getData() {
  $("button").click(function () {
    console.log("clicked");
    var search = "https://api.tvmaze.com/search/shows?q=" + $textBox.val();
    $.get(search, (data) => {
      console.log(data);
      for (var i = 0; i < data.length; i++) {
        reformat(data[i]);
      }
      // var results = JSON.parse(data); // The data comes to us in JSON format, it must be parsed in to a object that we can use
      // console.log(JSON.stringify(results));
    });
  });
}

getData();
$("#results").empty();

function reformat(data) {
  // empty all child nodes from #results
  //access dom elements
  var $div = $("#results");
  var $span = $("<span class ='result-card'></span>");

  var $h3 = $("<h3 class = 'card-title'></h3>");
  var $img = $("<img class = 'card-image'></img>");
  var $h2 = $("<h2 class = 'card-genres'></h2>");
  var $summary = $("<em class = 'card-summary'></em>");
  var $a = $("<a>Watch Show Now</a>");

  //set all dom elements to the correct obj node
  $h3.text(data.show.name);
  $img.attr("src", data.show.image.medium);
  $h2.text(data.show.genres);
  $summary.html(data.show.summary);
  $a.attr("href", data.show.officialSite);
  //apppend the dom
  $span.append($h3);
  $span.append($img);
  $span.append($h2);
  $span.append($summary);
  $span.append($a);
  $div.append($span);
  //
}
