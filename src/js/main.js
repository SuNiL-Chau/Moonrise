const { document } = require("postcss");

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
