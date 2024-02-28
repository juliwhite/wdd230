/** Form.html  Week 8*/
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirm-password");
const msg = document.querySelector("#message");

confirmPassword.addEventListener("focusout", validatePassword);

function validatePassword() {
	if (password.value !== confirmPassword.value) {
		msg.textContent = "❗️ Password Don't Match.";
		msg.style.visibility = "show";
		confirmPassword.style.backgroundColor = "#fff0f3";
		confirmPassword.value = "";
		confirmPassword.focus();
	} else {
		msg.style.display = "none";
		confirmPassword.style.backgroundColor = "#fff";
		confirmPassword.color = "#000";
	}
}

/** Page Rating - Display the user's value. */

const rangeValue = document.getElementById("rangevalue");
const range = document.getElementById("r");

// RANGE event listener.
range.addEventListener('change', displayRatingValue);
range.addEventListener('input', displayRatingValue);

function displayRatingValue() {
	rangeValue.innerHTML = range.value;
}