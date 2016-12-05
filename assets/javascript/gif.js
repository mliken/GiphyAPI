$(document).ready(function() {

 //initial array of tv shows for buttons
    var topics = ["Parks and Recreation", "It's Always Sunny in Philadelphia", "Bob's Burgers", "Gossip Girl"];
    var maxItems = 10;

    
$("#add-giphy").on("click", function() {
    
    // This line grabs the input from the textbox
    var name = $("#giphy-input").val().trim();
    console.log("user entry:" + name);
    
    topics.push(name);
    renderButtons();
    $('#giphy-input').val(""); //this one will clear the text box 
    return false;
    }); 
   

    // Function for adding new buttons
      function renderButtons() {
        // (this is necessary otherwise you will have repeat buttons)
          $("#buttons-view").empty();
          // Looping through the array of gifs
              for (var i = 0; i < topics.length; i++) {
                // Then dynamicaly generating buttons for each gif in the array
                // This code $("<button>") is all jQuery needs to create the beginning and end tag. (<button></button>)
               
                var button = $("<button>");
                // Adding a class of gif to our button
                button.addClass('giphy topic btn btn-lg btn-danger');
                // Adding a data-attribute
                button.attr("data-name", topics[i]);
                // Providing the initial button text
                button.text(topics[i]);
                // Adding the button to the buttons-view div
                $("#buttons-view").append(button);
              }
      }// ends renderButtons      
    function displayGiphs(){

        var search= $(this).data('name'); // variable that goes and search for "this" button specific data attr (name)
        console.log("search query" + search);
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + search + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({ url: queryURL, method: "get" }).done(function(response) {

        $("#giphy-view").empty();
         console.log(response); 

        
        for (i=0; i < maxItems; i++){ 
          var image = $("<img>");
          image.addClass("image");
            image.attr({
                "src": response.data[i].images.fixed_height_still.url,
                "data-still": response.data[i].images.fixed_height_still.url,
                "data-animated": response.data[i].images.fixed_height.url,
                "data-rating": response.data[i].rating,
                "data-state": "still",
            });
                $("#giphy-view").append(image);
      } // end for loop 
    }); // ends AJAX
  }; // ends displayGifs

  

$(document).on("click", ".giphy", displayGiphs);

    // change from static to animated when clicked on image

    $(document).on("click", ".image", function() {
        console.log("clicked");

        var state = $(this).attr("data-state")
            // console.log(state);
        if (state === "still") {
            $(this).attr("src", $(this).data("animated"));
            $(this).attr("data-state", "animated");
        } else {
            // If the clicked image's state is still, update it's src attribute to what it's data-animate value is.
            // Then set the image's data-state to animate
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }
    }); // end of onclick image

}); // end of document ready function      
    
    