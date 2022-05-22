document.onreadystatechange = function () {
	if (document.readyState === "complete" && window.matchMedia
		&& window.matchMedia("(prefers-color-scheme: dark)").matches) {
		// System is using dark theme, switch website to dark theme automatically
	}
}

function toggleDark() {
	// Toggle dark
}

function goFallback() {
	window.location.href = "fallback/index"
}