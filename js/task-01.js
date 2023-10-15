const inputField = document.querySelector("#validation-input");
// console.log(inputField);
inputField.addEventListener("blur", (event) => {
	if (event.currentTarget.value.length === Number(inputField.dataset.length)) {
		return (inputField.classList = "valid");
	}
	return (inputField.classList = "invalid");
});
