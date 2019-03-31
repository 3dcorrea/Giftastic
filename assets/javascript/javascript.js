// For some reason, the gifs arent showing up on the dom. I cant figure out what I'm missing/doing incorrectly.

var topics = ["Cheeses", "Wines", "Cars", "Spongebob", "Memes", "Haduken", "Kamehameha", "Random", ];

function showTopicInfo() {
    var topic = $(this).attr("data-name");

    // var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=r1gNhXP5d6BYyLMWx6Z6yYMnpXMvdvF8&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
    var queryURL = "https://api.giphy.com/v1/stickers/search?api_key=r1gNhXP5d6BYyLMWx6Z6yYMnpXMvdvF8&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var results = response.data;
        console.log(queryURL);
        console.log(response);
        var topicDiv = $("<div class='topic'>");
        var rating = results.rated;
        var paragraph = $("<p>").text("Rating: " + rating);
        topicDiv.append(paragraph);
        var imgURL = results.Images;
        var image = $("<img>").attr("src", imgURL);
        topicDiv.append(image);
        $("#topics-view").empty();
        $("#topics-view").prepend(topicDiv, rating, imgURL, );
    });
};
// .then(function (response) {
//     var results = response.data;
//     for (var i = 0; i < results.length; i++) {
//         if (results[i].rating !== "r" && results[i].rating !== "pg-13") {
//             var gifDiv = $("<div>");
//             var rating = results[i].rating;
//             var p = $("<p>").text("Rating: " + rating);
//             var personImage = $("<img>");
//             // Giving the image tag an src attribute of a proprty pulled off the
//             // result item
//             personImage.attr("src", results[i].images.fixed_height.url);
//             // Appending the paragraph and personImage we created to the "gifDiv" div we created
//             gifDiv.append(p);
//             gifDiv.append(personImage);
//             // Prepending the gifDiv to the "#gifs-appear-here" div in the HTML
//             $("#gifs-appear-here").prepend(gifDiv);
//         }
//     }
// });


function createButtons() {
    $("#button-view").empty();
    for (var i = 0; i < topics.length; i++) {
        var a = $("<button>");
        a.addClass("topic");
        a.attr("data-name", topics[i]);
        a.text(topics[i]);
        $("#button-view").append(a);
    }
}
$(document).on("click", ".topic", showTopicInfo);
createButtons();

$("#add-topic").on("click", function (event) {
    event.preventDefault();
    var topic = $("#topic-input").val().trim();
    topics.push(topic);
    console.log(topics);
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