// For some reason, the gifs arent showing up on the dom. I cant figure out what I'm missing/doing incorrectly.

var topics = ["Cheeses", "Wines", "Cars", "Spongebob", "Memes", "Haduken", "Kamehameha", "Random", ];

function showTopicInfo() {
    var topic = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=r1gNhXP5d6BYyLMWx6Z6yYMnpXMvdvF8&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var topicDiv = $("<div class='topic'>");
        var rating = response.data.Rated;
        var paragraph = $("<p>").text("Rating: " + rating);
        topicDiv.append(paragraph);
        var imgURL = response.data.Images;
        var image = $("<img>").attr("src", imgURL);
        topicDiv.append(image);
        $("#topics-view").empty();
        $("#topics-view").append(topicDiv, rating, paragraph, imgURL, image);
    });
};

function createButtons() {
    $("#button-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#button-view").append(a);
    };
};
createButtons();

// I keep getting an error message for line 40 but I cant figure out why
$("#add-topic").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().trim();
    topics.push(topic);
    createButtons(topic);
});



//I took this from the solved example in class but I'm unable to implement it because gifs arent loading in the dom

// $(".gif").on("click", function() {
//     // The attr jQuery method allows us to get or set the value of any attribute on our HTML element
//     var state = $(this).attr("data-state");
//     // If the clicked image's state is still, update its src attribute to what its data-animate value is.
//     // Then, set the image's data-state to animate
//     // Else set src to the data-still value
//     if (state === "still") {
//       $(this).attr("src", $(this).attr("data-animate"));
//       $(this).attr("data-state", "animate");
//     } else {
//       $(this).attr("src", $(this).attr("data-still"));
//       $(this).attr("data-state", "still");
//     }
//   });