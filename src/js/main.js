// const { document } = require("postcss");
AOS.init({
	once: true,
});

const preloaderVideo = document.getElementById("preloader-video");

// Add event listener to detect when the video has finished loading
preloaderVideo.addEventListener("loadeddata", () => {
	// Video is loaded, remove the preloader container
	const preloaderContainer = document.getElementById("preloader-container");
	setTimeout(() => {
		preloaderContainer.classList.add("loaded");
	}, 2000);
	setTimeout(() => {
		preloaderContainer.remove();
	}, 3000);
});

// Start loading the video
preloaderVideo.load();

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
let closeButtons = document.querySelectorAll(".popUp__closeBtn");
// console.log(closeButtons);
talkButton.addEventListener("click", () => {
	console.log("add");
	if (hamburger.classList.contains("active")) {
		hamburger.click();
	}
	document.body.classList.add("overflow-h");
	document.querySelector("#letsTalk").classList.add("active");
	document.querySelector("#letsTalk video").play();
});

closeButtons.forEach((closeButton) => {
	closeButton.addEventListener("click", () => {
		document.body.classList.remove("overflow-h");
		closeButton.closest(".popUp").classList.remove("active");
		if (document.querySelector(".js-contact-state"))
			document
				.querySelector(".js-contact-state")
				.classList.remove("active");
	});
});

let LetsTalkForm = document.querySelector("#letsTalk form");

if (LetsTalkForm) {
	LetsTalkForm.addEventListener("submit", function (e) {
		e.preventDefault();
		let loader = document.querySelector(".loader");

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
		var emailInput = LetsTalkForm.querySelector(".popUp__formInput.-email");
		var email = emailInput.value.trim();
		if (email === "") {
			alert("Email is required");
			formValid = false;
		}

		var formData = new FormData(this); // Get form data
		formData.append("letsTalk", true);
		// Append selected checkbox values manually
		var checkboxes = document.getElementsByName("project_idea");
		var checkedCategories = Array.prototype.slice
			.call(checkboxes)
			.filter(function (checkbox) {
				return checkbox.checked;
			})
			.map(function (checkbox) {
				return checkbox.value;
			});

		formData.append("idea", checkedCategories.join(", "));
		// If there are no errors, submit the form
		if (formValid) {
<<<<<<< HEAD
			loader.classList.add("active");
			const xhr = new XMLHttpRequest();
			xhr.open("POST", "form/mail.php", true);
			xhr.setRequestHeader("Accept", "application/json");
=======
          	formData.append("letsTalk", true);
            const xhr = new XMLHttpRequest();
            xhr.open("POST", "form/mail.php", true);
			xhr.setRequestHeader(
				"Content-type",
				"application/x-www-form-urlencoded"
			);
>>>>>>> 7dd53fb9491585dd38bd8691b41ee7f554d5b85c
			xhr.onreadystatechange = function () {
				if (xhr.readyState === 4 && xhr.status === 200) {
					if (
						xhr.status === 200 &&
						xhr.responseText === "mail sent"
					) {
						loader.classList.remove("active");
						e.target.classList.add("-success");

						// Request successful, do something if needed
						console.log("Email sent successfully!");
						form.reset(); // Reset the form

						setTimeout(() => {
							e.target.classList.remove("-success");
						}, 5000);
					} else {
						loader.classList.remove("active");

						e.target.classList.add("-failed");

						// Request successful, do something if needed
						console.log("Email not sent");

						setTimeout(() => {
							e.target.classList.remove("-failed");
						}, 5000);
					}
				}
			};
			xhr.send(formData);

			// Submit the form
		}
	});

	function isValidEmail(email) {
		var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		return emailRegex.test(email);
	}
}
