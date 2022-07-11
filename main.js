const quotes = ["software developer", "what do you want", "who makes stupid code",
	"i am a member of ThatCakeID", "@gianxddddd", "or MoreGianXD",
	"i do powerpoint presentation aswell", "", "okay, what now?",
	"my friends like to make fun of my last name", "real gaming moment", "is coding a hobby or a job?", 
	"give me bobux for more info", "don't doxx me please", "i live inside your walls",
	"gift me the valve complete pack", "webdev sucks my friend", "stfu im listening to c418's aria math",
	"check out the background lol", "very profeshnal idot"];
var intervalId;

function changeQuote() {
	if (document.readyState !== "complete") return;
	$(".quote").fadeOut(function () {
		var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

		if (randomQuote != $(this).text()) {
			$(this).text(randomQuote).fadeIn();
		} else {
			// If the random quote is equivalent to the current quote, then reset to the default quote
			$(this).text("Professional idiot").fadeIn();
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

	// Create tooltips using tippy.js by the data-tippy-content attribute
	tippy("[data-tippy-content]", {
		animation: "perspective",
		theme: "translucent",
		touch: false
	});

	// Change quotes every 10 seconds
	startInterval();
}
