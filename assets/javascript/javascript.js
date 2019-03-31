// For some reason, the gifs arent showing up on the dom. I cant figure out what I'm missing/doing incorrectly.

var topics = ["Cheeses", "Wines", "Cars", "Spongebob", "Memes", "Kamehameha", "Random", ];

function showTopicInfo() {
    var topic = $(this).attr("data-name");

    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=r1gNhXP5d6BYyLMWx6Z6yYMnpXMvdvF8&q=" + topic + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        var results = response.data;
        var topicDiv = $("<div class='topic'>");
        var rating = results.rated;
        var paragraph = $("<p>").text("Rating: " + rating);
        topicDiv.append(paragraph);
        var imgURL = results.Images;
        var image = $("<img>").attr("src", imgURL);
        topicDiv.append(image);
        $("#topics-view").empty();
        $("#topics-view").append(topicDiv, rating, imgURL, );
    });
};

topics.forEach(function (element) {
    console.log(element);
});

// This should create topic buttons dynamically and add them to the array on the navbar
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

// not sure if this actually works , but I know its needed to start/stop the gifs when they actually load
$(".gif").on("click", function () {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
});