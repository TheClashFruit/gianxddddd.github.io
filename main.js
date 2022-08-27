var interval = null;
var quoteTippy = null;

function createInterval() {
	if (interval != null) return;
	interval = setInterval(fetchQuote, 10000);
}

function fetchQuote() {
	$.get("https://api.quotable.io/random?maxLength=60", function (data, status) {
		if (document.readyState !== "complete") return;
		if (status != "success") return;
		if (quoteTippy == null) return;
		quoteTippy.setContent(`Quote by ${data.author}`);

		$(".quote").fadeOut(function () {
			$(this).text(data.content).fadeIn();
		});
	});
}

function fetchBackground() {
	var bodyElement = $("body, html");
	const url = "https://source.unsplash.com/random/1920x1080/?city,night";
	if (document.readyState !== "complete") return;
	bodyElement.css("background", `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${url}")`);
	bodyElement.css("background-attachment", "fixed");
	bodyElement.css("background-position", "center");
	bodyElement.css("background-repeat", "no-repeat");
	bodyElement.css("background-size", "cover");
}

window.onload = function () {
	// Register focus and blur events for improving performance
	document.addEventListener("focus", function () {
		// Re-create interval once the page has been focused
		createInterval();
	});
	document.addEventListener("blur", function () {
		// Stop interval to improve performance when page is out of focus
		clearInterval(interval);
		interval = null;
	});

	// Create tooltips using tippy.js by the data-tippy-content attribute
	// Note that quoteTippy is being initialized here as the first index of return value
	quoteTippy = tippy("[data-tippy-content]", {
		animation: "shift-toward",
		arrow: false,
		theme: "translucent",
		touch: false
	})[0];
	
	// Some tweaks to tippyQuote
	quoteTippy.setProps({
		animation: "shift-away",
		placement: "bottom-end",
		touch: "hold"
	});

	// Finally create the interval then fetch some quotes and backgrounds
	createInterval();
	fetchQuote();
	fetchBackground();
}
