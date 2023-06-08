// const { document } = require("postcss");

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
		hamburger.classList.toggle("active");
	}
	document.body.classList.add("overflow-h");
	document.querySelector("#letsTalk").classList.add("active");
});

closeButton.addEventListener("click", () => {
	document.body.classList.remove("overflow-h");
	document.querySelector("#letsTalk").classList.remove("active");
});
