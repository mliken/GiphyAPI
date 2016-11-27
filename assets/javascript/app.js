var tvshows = ["Parks and Recreation", "It's Always Sunny in Philadelphia", "Bob's Burgers", "Gossip Girl"];
var name ="";


$('button').on('click',function(){
		var x= $(this).data("search");
		console.log (x);
		
//URL for API
		var queryURL ="http://api.giphy.com/v1/gifs/search?q= "+x+" &api_key=dc6zaTOxFJmzC&limit=10";  
	
	})

//function to clear existing buttons and create new buttons
function createBtn(){
	$("#newShow").empty();
	for(var i=0; i<tvshow.length; i++){
		$("#newShow").append('<button class ="btn btn-primary" data-name"'+tvshow[i]+'">'+tvshow[i]+'</button>');
	};
};

	