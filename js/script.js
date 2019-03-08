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
                console.log(response.data[x].images.original.url);
            }
            lastSearch = searchBar;
        },
    });
});