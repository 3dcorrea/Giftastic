var APIkey = "r1gNhXP5d6BYyLMWx6Z6yYMnpXMvdvF8";

var topics = ["cheeses", "wines", "cars", "spongebob", "memes",];

function showTopicInfo() {
    var topic = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=" + APIkey + topic + "&limit=10&offset=0&rating=G&lang=en";
    // Creating an AJAX call for the specific movie button being clicked
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // Creating a div to hold the movie
        var topicDiv = $("<div class='movie'>");
        // Storing the rating data
        var rating = response.Rated;
        // Creating an element to have the rating displayed
        var firstParagraph = $("<p>").text("Rating: " + rating);
        // Displaying the rating
        topicDiv.append(firstParagraph);
       
    
        // Retrieving the URL for the image
        var imgURL = response.Poster;
        // Creating an element to hold the image
        var image = $("<img>").attr("src", imgURL);
        // Appending the image
        movieDiv.append(image);
        // Putting the entire movie above the previous movies
        $("#movies-view").prepend(movieDiv);
    });
}

function createButtonsBro() {
    $("#topics-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);

        $("#topic-view").append(a);
    }
}

// $("#add-topic").on("click", function (event) {
//     event.preventDefault();
//     var topic = $("#topic-input").val().trim();
//     topics.push(topic);
//     createButtonsBro();
// });
// createButtonsBro();