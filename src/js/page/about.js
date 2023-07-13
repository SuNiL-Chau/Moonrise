let brandProtfolio = document.getElementById("brandProtfolio");

function openBrand() {
	document.body.classList.add("overflow-h", "--brandOpen");
	brandProtfolio.classList.add("active");
	if (window.innerWidth > 1024) {
	}
}
if (window.innerWidth > 1024) {
	var swiper = new Swiper("#brandSlider", {
		slidesPerView: "auto",
		spaceBetween: 30,
		grabCursor: true,
	});
}

// Get the brandSlider element
const brandSlider = document.getElementById("brandSlider");

// Add event listeners for mouseenter and mouseleave
brandSlider.addEventListener("mouseenter", handleMouseEnter);
brandSlider.addEventListener("mouseleave", handleMouseLeave);

function handleMouseEnter() {
	brandSlider.classList.add("dragging");
}

function handleMouseLeave() {
	brandSlider.classList.remove("dragging");
}

// brandSlider.addEventListener("mousemove", handleMouseMove);
const customCursor = document.querySelector(".dragme");

function handleMouseMove(event) {
	const { clientX, clientY } = event;
	const { left, top } = brandSlider.getBoundingClientRect();

	// Calculate the cursor position relative to the brandSlider element
	const posX = clientX - left;
	const posY = clientY - top;

	// Update the custom cursor position
	customCursor.style.transform = `translate(${posX}px, ${posY}px)`;
}
const cursorPos = { x: 0, y: 0 };

let isDragging = false;
const moveCursor = (e) => {
	const mouseY = e.clientY;
	const mouseX = e.clientX;

	if (!isDragging) {
		customCursor.style.transition = "none"; // Disable transition
	}

	customCursor.style.transform = `translate3d(${mouseX - 50}px, ${
		mouseY - 50
	}px, 0)`;
};

const startDragging = () => {
	isDragging = true;
	customCursor.style.transition = ".3s ease"; // Enable transition after dragging
	console.log("startDragging");
};

const stopDragging = () => {
	isDragging = false;
	console.log("stopDragging");
};

window.addEventListener("mousemove", moveCursor);
brandSlider.addEventListener("mousedown", startDragging);
brandSlider.addEventListener("mouseup", stopDragging);
