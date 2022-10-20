console.log("DEV BUILD");

const wipText = document.getElementById("wip")
const backButtonLink = document.getElementById("back-btn-a")

try {
    wipText.innerHTML = "DEV BUILD"
} catch (error) {}
backButtonLink.setAttribute("href", "https://hyxud-devserver.web.app")