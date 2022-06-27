const quotes = ["Software Developer", "Absolute Gamer", "who makes stupid code",
	"\"Programming is Art.\"", "@gianxddddd", "or MoreGianXD",
	"\"Deez Nuts got em'\"", "aka Gian Borcillo", "hi you're stupid.",
	"\"You're visiting a trash website!\"", "\"turi ip ip\"", "\"C/C++ gives me headaches.\"", 
	"\"I like to drink coca-cola.\"", "Don't doxx me please", "I live inside your walls.",
	"gift me the valve complete pack", "\"Web Development sucks my friend.\"", "stfu im listening to c418's aria math",
	"\"Hover or tap the picture.\"", "don't even ask why my monitor is dirty", "\"Very profeshnal idot\""];
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

function changeImage() {
	if (document.readyState !== "complete") return;
	var element = $(".image");

	if (element.attr("src") == "./assets/image_irl.jpg") {
		element.stop(true).fadeTo("fast", 0.5, function () {
			$(this).attr("src", "./assets/image.png");
		}).fadeTo("fast", 1);
	} else if (element.attr("src") == "./assets/image.png") {
		element.stop(true).fadeTo("fast", 0.5, function () {
			$(this).attr("src", "./assets/image_irl.jpg");
		}).fadeTo("fast", 1);
	}
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

	// Register hover events for some elements
	$(".image").hover(function () {
		changeImage();
	});
	$(".quote").hover(function () {
		stopInterval();
	}, function () {
		startInterval();
	});

	// Register touch event for image if device is touchable
	// We will use built-in DOM functions here
	Array.prototype.forEach.call(document.getElementsByClassName("image"), function (element) {
		element.addEventListener("touchend", function (event) {
			event.preventDefault();
			changeImage();
		});
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
