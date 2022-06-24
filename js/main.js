const quotes = ["Lazy developer", 
	"Who likes to code but has no projects to work with" +
	" and has no motivation to continue coding.", "@gianxddddd", "Me when yo mom",
	"Deez Nuts gotem", "aka Gian Borcillo", "or GianXD#1059 on Discord", "I was travelling" +
	" to a city called Ganoo City. I dropped my briefcase after seeing a small figure of" +
	" a penguin named Tusk (yes the name is actually tusk no joke asshole), then I took it home" +
	" then, the penguin started talking, asked me to install a free operating system called Linux" +
	", out of curiousity, I downloaded and installed it, and when I saw the desktop..." +
	" I SAW AMOGUS 420!!! SUSSY BAKA BROOOO!!! HGAHAHAH GOTEM THANKS FOR READING BTW..."];
var intervalId;

function changeQuote() {
	if (document.readyState !== "complete") return;
	$(".quote").fadeOut(function () {
		var randomQuote = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;

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
	intervalId = setInterval(changeQuote, 1000);
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