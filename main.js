var colorScheme = "light";

function changeColorScheme(name) {
	if (name === "dark") {
		$("body, html").addClass("dark");
		$("h1.content").addClass("dark");
		$("p.content").addClass("dark");
		$("button.content").addClass("dark");
	} else if (name === "light") {
		$("body, html").removeClass("dark");
		$("h1.content").removeClass("dark");
		$("p.content").removeClass("dark");
		$("button.content").removeClass("dark");
	}

	colorScheme = name;
}

function registerColorSchemeEvents() {
	// Register color scheme events
	window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", event => {
		// Listen for incoming color schemes
		changeColorScheme(event.matches ? "dark" : "light");
	});

	// Switch to dark mode if preferred color scheme is dark
	changeColorScheme(window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
}

function registerButtonEvents() {
	// Register the events for specified buttons
	$("#toggleColorScheme").click(function () {
		if (colorScheme == "dark") {
			changeColorScheme("light");
		} else if (colorScheme == "light") {
			changeColorScheme("dark");
		}
	});
	$("#projectsLink").click(function () {
		window.location = "projects";
	});
	$("#messageLink").click(function () {
		window.location = "message";
	});
	$("#aboutLink").click(function () {
		window.location = "me";
	});
}

$(window).on("load", function() {
	registerColorSchemeEvents();
	registerButtonEvents();
});