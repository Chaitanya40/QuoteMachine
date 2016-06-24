var currentQuote="",currentAuthor="";
$( document ).ready(function() {
    getQuote();
    
    $("#new-quote").on("click",getQuote);
    $("#tweet-quote").on("click",function(){
    $('#tweet-quote').attr('href', 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
    });
});

function getQuote(){
		
		var rand = Math.floor(Math.random()*(quotes.length));
		currentQuote = quotes[rand].quote;
		currentAuthor = quotes[rand].author;
		$("#text").text(quotes[rand].quote);
		$("#author").text(quotes[rand].author);
		$("body").css("background-color",quotes[rand].color);
		$(".quote-box").css("color",quotes[rand].color);

}