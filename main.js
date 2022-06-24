const quotes = ["\"Lazy developer\"", 
	"\"Who likes to code but doesn't have a project to work in" +
	" and has no motivation to continue coding.\"", "@gianxddddd", "Are you seeing this?",
	"\"Deez Nuts gotem\"", "aka Gian Borcillo", "or GianXD#1059 on Discord", "\"If she dies, I die too.\"",
	"\"Your Mom\"", "\"I have been living for 15 years now.\"", "\"I like to drink coca-cola\""];
var intervalId;

function changeQuote() {
	if (document.readyState !== "complete") return;
	$(".quote").fadeOut(function () {
		var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

		if (randomQuote != $(this).text()) {
			$(this).text(randomQuote).fadeIn();
		} else {
			// If the random quote is equivalent to the current quote, then reset to the default quote
			$(this).text("\"Professional idiot\"").fadeIn();
		}
	});

	startInterval();
}

function startInterval() {
	if (intervalId) return;
	intervalId = setInterval(changeQuote, 5000);
}

function stopInterval() {
	if (!intervalId) return;
	clearInterval(intervalId);
	intervalId = null;
}

window.onload = function () {
	// Register focus and blur events for improving performance
	document.addEventListener("focus", function () {
		startInterval();
	});
	document.addEventListener("blur", function () {
		stopInterval();
	});

	// Register hover event for the quote
	$(".quote").hover(function () {
		stopInterval();
	}, function () {
		startInterval();
	});

	// Change quotes every 10 seconds
	startInterval();
}