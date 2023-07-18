"use strict";

const tabNavs = document.querySelectorAll(".deliverable__nav");
const tabNavsBar = document.querySelector(".deliverable__navsBar");
const tabContents = document.querySelectorAll(".deliverable__tab");
tabNavs.forEach(tabNav => {
  tabNav.addEventListener("click", () => {
    const activeTab = tabNav.textContent;
    tabNavs.forEach(nav => {
      nav.classList.remove("active");
    });
    tabContents.forEach(content => {
      content.classList.remove("show");
    });
    tabNavsBar.style.width = "".concat(tabNav.offsetWidth, "px");
    tabNavsBar.style.transform = "translateX(".concat(tabNav.offsetLeft, "px)");
    tabNav.classList.add("active");
    document.querySelector("[data-tab=\"".concat(activeTab, "\"]")).classList.add("show");
  });
});

// if (window.innerWidth > 1024) {
// 	const cursor = document.querySelector("#cursor");

// 	const cursorCircle = cursor.querySelector(".cursor__circle");

// 	const mouse = { x: -100, y: -100 }; // mouse pointer's coordinates

// 	const pos = { x: 0, y: 0 }; // cursor's coordinates

// 	const speed = 0.15; // between 0 and 1

// 	const cursorPos = { x: 0, y: 0 };

// 	const cursorBorderPos = { x: 0, y: 0 };

// 	document.addEventListener("mousemove", (e) => {
// 		cursorPos.x = e.clientX;

// 		cursorPos.y = e.clientY;

// 		cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
// 	});

// 	requestAnimationFrame(function loop() {
// 		const easting = 8;

// 		cursorBorderPos.x += (cursorPos.x - cursorBorderPos.x) / easting;

// 		cursorBorderPos.y += (cursorPos.y - cursorBorderPos.y) / easting;

// 		cursor.style.transform = `translate(${cursorBorderPos.x}px, ${cursorBorderPos.y}px)`;

// 		requestAnimationFrame(loop);
// 	});

// 	const cursorModifiers = document.querySelectorAll(".service__section");

// 	cursorCircle.style.opacity = "0";

// 	cursorModifiers.forEach((curosrModifier) => {
// 		curosrModifier.addEventListener("mouseenter", function () {
// 			const image = this.getAttribute("cursor-background-image");

// 			// console.log(cursorCircle.style);

// 			cursorCircle.style.backgroundImage = `url(../../assets/images/${image})`;

// 			cursorCircle.style.opacity = "1";
// 		});

// 		curosrModifier.addEventListener("mouseleave", function () {
// 			cursorCircle.style.opacity = "0";

// 			const image = this.getAttribute("cursor-background-image");
// 		});
// 	});
// }
//# sourceMappingURL=service.js.map