var colorScheme = "light";

function registerColorSchemeEvent() {
	// Listen for incoming color schemes
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
		colorScheme = event.matches ? "dark" : "light";

		if (colorScheme == "dark") {
			$("body, html").addClass("dark");
			$("h1.content").addClass("dark");
			$("p.content").addClass("dark");
			$("button.content").addClass("dark");
		} else {
			$("body, html").removeClass("dark");
			$("h1.content").removeClass("dark");
			$("p.content").removeClass("dark");
			$("button.content").removeClass("dark");
		}
	});

	// Switch to dark mode if current color scheme is dark
	if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
		colorScheme = "dark";
		$("body, html").addClass("dark");
		$("h1.content").addClass("dark");
		$("p.content").addClass("dark");
		$("button.content").addClass("dark");
	}
}

function registerButtonEvents() {
	// Register the events for specified buttons
	$("#toggleColorScheme").click(function () {
		if (colorScheme == "dark") {
			$("body, html").removeClass("dark");
			$("h1.content").removeClass("dark");
			$("p.content").removeClass("dark");
			$("button.content").removeClass("dark");
			colorScheme = "light";
		} else if (colorScheme == "light") {
			$("body, html").addClass("dark");
			$("h1.content").addClass("dark");
			$("p.content").addClass("dark");
			$("button.content").addClass("dark");
			colorScheme = "dark";
		}
	});
}

$(window).on("load", function() {
	registerColorSchemeEvent();
	registerButtonEvents();
});