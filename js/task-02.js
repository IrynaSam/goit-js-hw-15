const inputField = document.querySelector("#font-size-control");
const text = document.querySelector("#text");
let step = 0;
inputField.addEventListener("input", (e) => {
	text.style.fontSize = `${e.currentTarget.value}px`;
});
