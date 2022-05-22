var hasToggledDark = false

document.onreadystatechange = function () {
	if (document.readyState === "complete" && window.matchMedia
		&& window.matchMedia("(prefers-color-scheme: dark)").matches) {
		// System is using dark theme, switch website to dark theme automatically
		if (hasToggledDark) hasToggledDark = false
		toggleDark()
	}
}

function toggleDark() {
	var header = document.getElementById("header")
	var readmeContainer = document.getElementById("readme-container")

	if (!hasToggledDark) {
		// Trigger dark mode
		header.style.animation = "turnToDark"
		header.style.animationFillMode = "forwards"
		header.style.animationDuration = "1s"
		readmeContainer.style.animation = "turnToDark"
		readmeContainer.style.animationFillMode = "forwards"
		readmeContainer.style.animationDuration = "1s"
		hasToggledDark = true
	} else if (hasToggledDark) {
		// Trigger light mode
		header.style.animation = "turnToLight"
		header.style.animationFillMode = "backwards"
		header.style.animationDuration = "1s"
		readmeContainer.style.animation = "turnToLight"
		readmeContainer.style.animationFillMode = "backwards"
		readmeContainer.style.animationDuration = "1s"
		hasToggledDark = false
	}
}

function goFallback() {
	window.location.href = "fallback/index"
}