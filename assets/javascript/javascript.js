var topics = ["cheeses", "wines", "cars", "spongebob", "memes", ];

function showTopicInfo() {
    var topic = $(this).attr("data-name");
    var queryUrl = "https://api.giphy.com/v1/gifs/search?api_key=r1gNhXP5d6BYyLMWx6Z6yYMnpXMvdvF8" + topic + "&limit=10&offset=0&rating=G&lang=en";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        var topicDiv = $("<div class='movie'>");
        var rating = response.Rated;
        var paragraph = $("<p>").text("Rating: " + rating);
        topicDiv.append(paragraph);
        var imgURL = response.Poster;
        var image = $("<img>").attr("src", imgURL);
        topicDiv.append(image);
        $("#movies-view").prepend(topicDiv);
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