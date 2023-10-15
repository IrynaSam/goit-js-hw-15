function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
const body = document.querySelector("body");
const color = document.querySelector(".color");
const colorButton = document.querySelector(".change-color");

function handleClick() {
	body.style.backgroundColor = getRandomHexColor();
	color.textContent = body.style.backgroundColor;
}

colorButton.addEventListener("click", handleClick);
