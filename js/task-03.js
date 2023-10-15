const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerSubmit);

function handlerSubmit(event) {
	event.preventDefault();
	const { email, password } = event.currentTarget.elements;

	if (email.value === "" || password.value === "") {
		return alert("всі поля повинні бути заповнені");
	}
	const data = {
		email: email.value,
		password: password.value,
	};
	form.reset();
	console.log(data);
}
