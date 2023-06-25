let brandProtfolio = document.getElementById("brandProtfolio");
function openBrand() {
	document.body.classList.add("overflow-h");
	brandProtfolio.classList.add("active");
}
if (window.innerWidth > 1024) {
	var swiper = new Swiper("#brandSlider", {
		slidesPerView: "auto",
		spaceBetween: 30,
		grabCursor: true,
	});
}
