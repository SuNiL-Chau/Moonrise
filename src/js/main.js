// const { document } = require("postcss");
AOS.init({
	once: true,
});

let hamburger = document.querySelector(".navbar__hamburger");
let MenuItems = document.querySelector(".navbar__items");
hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	MenuItems.classList.toggle("active");
	if (hamburger.classList.contains("active")) {
		document.body.classList.add("overflow-h");
	} else {
		document.body.classList.remove("overflow-h");
	}
});
let talkButton = document.querySelector(".navbar__talkBtn");
let closeButton = document.querySelector(".popUp__closeBtn");

talkButton.addEventListener("click", () => {
	console.log("add");
	if (hamburger.classList.contains("active")) {
		hamburger.click();
	}
	document.body.classList.add("overflow-h");
	document.querySelector("#letsTalk").classList.add("active");
});

closeButton.addEventListener("click", () => {
	document.body.classList.remove("overflow-h");
	document.querySelector("#letsTalk").classList.remove("active");
});

document
	.querySelector("#letsTalk form")
	.addEventListener("submit", function (e) {
		e.preventDefault();

		let formValid = true;
		// Clear previous error messages and remove error class
		var errorMessages = document.querySelectorAll(".form-error");
		var formFloatings = document.querySelectorAll(".popUp__inputWrapper");

		errorMessages.forEach(function (formFloating) {
			formFloating.classList.remove("-Invalid");
		});

		// Validate Name
		var nameInput = document.querySelector(".popUp__formInput.-fullname");
		var name = nameInput.value.trim();
		if (name === "") {
			alert("Name is required");
			formValid = false;
		}

		// Validate Email
		var emailInput = document.querySelector(".popUp__formInput.-email");
		var email = emailInput.value.trim();
		if (email === "") {
			alert("Email is required");
			formValid = false;
		} else if (!isValidEmail(email)) {
			alert("Invalid email format");
			formValid = false;
		}

		console.log(formValid);
		// If there are no errors, submit the form
		if (formValid) {
			const xhr = new XMLHttpRequest();
			xhr.open("POST", "send_email.php", true);
			xhr.setRequestHeader(
				"Content-type",
				"application/x-www-form-urlencoded"
			);
			xhr.onreadystatechange = function () {
				if (
					xhr.readyState === XMLHttpRequest.DONE &&
					xhr.status === 200
				) {
					e.target.classList.add("-success");

					// Request successful, do something if needed
					console.log("Email sent successfully!");
					form.reset(); // Reset the form

					setTimeout(() => {
						e.target.classList.remove("-success");
					}, 5000);
				} else {
					e.target.classList.add("-failed");

					// Request successful, do something if needed
					console.log("Email not sent");

					setTimeout(() => {
						e.target.classList.remove("-failed");
					}, 5000);
				}
			};
			xhr.send(`email=${encodeURIComponent(email)}`);

			// Submit the form
		}
	});
