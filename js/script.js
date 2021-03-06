/* global $ */
let gifs = [];
let lastSearch;
$("#search-button").click(function(){
    let searchBar = $("#search-term").val();
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search?q=" + searchBar + "&rating=pg&api_key=dc6zaTOxFJmzC",
        method: "GET",
        success: function(response) {
            if(lastSearch !== searchBar){
                gifs = [];
            }
            let x = Math.floor(Math.random() * 25);
            if (gifs.length === 25){
                alert("Maximum gifs for this search. Please search something else!");
            } else {
                while (gifs.includes(x) === true) {
                    x = Math.floor(Math.random() * 25);
                }
                gifs.push(x);
                $("#main").append("<img src=" + response.data[x].images.original.url + ">");
                $("img").click(function(){
                    $(this).css("height", "100%");
                    $(this).css("width", "100%");
                    
                });
                console.log(response.data[x].images.original.url);
            }
            lastSearch = searchBar;
        },
    });
});
$("#record").click(function(){
   var recognition = new window.webkitSpeechRecognition();
    recognition.onresult = function(event) {
    var text = event.results[0][0].transcript;
    $("input").val(text);
    console.log(text);
    };
    recognition.start();
});