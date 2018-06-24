var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");

function setGradient () { 
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background;
}

function getRandomColor () {
	return '#'+Math.random().toString(16).slice(-6);
}

function setRandomColor () {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", setRandomColor);

window.addEventListener("load", setGradient);
