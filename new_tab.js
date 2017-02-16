$(function() {
	var url = "http://numbersapi.com/random/year?json";
	var url2 = "http://numbersapi.com/random/trivia?json";
	var quote = $("#quote"); 
	var quote2 = $("#quote2");


	//Send http GET
	$.get(url, function (data) { //HTTP GET
		quote.text(data.text);

	}); 
	$.get(url2, function (data2) {
		quote2.text(data2.text);
	})
});
