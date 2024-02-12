"use strict";

// const { document } = require("postcss");

// // const { document } = require("postcss");
AOS.init({
  once: true
});
const preloaderVideo = document.getElementById("preloader-video");
if (preloaderVideo) {
  // Add event listener to detect when the video has finished loading

  // Set the path to your animation JSON file
  var animationPath = "../../assets/lottie/loading-moon.json";

  // Configure the animation options
  var animationOptions = {
    container: preloaderVideo,
    renderer: "svg",
    loop: true,
    autoplay: true,
    // Set autoplay to false for preloading
    path: animationPath
  };

  // Preload the animation
  var animation = lottie.loadAnimation(animationOptions);
  // Video is loaded, remove the preloader container
  if (animation) {
    const preloaderContainer = document.getElementById("preloader-container");
    window.onload = () => {
      setTimeout(() => {
        preloaderContainer.classList.add("loaded");
      }, 1500);
    };
  }
}
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
let animationSkipForward;
talkButton.addEventListener("click", () => {
  let popUpoffset = document.querySelector("#letsTalk form.popUp__container");
  console.log(popUpoffset);
  if (hamburger.classList.contains("active")) {
    hamburger.click();
  }
  document.body.classList.add("overflow-h");
  document.querySelector("#letsTalk").classList.add("active");
  let player = document.querySelector("#blueMoon");
  if (!animationSkipForward) {
    animationSkipForward = bodymovin.loadAnimation({
      container: player,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: "../../assets/lottie/blue-moon.json"
    });
    animationSkipForward.playSegments([0, 60], true);
  }

  // my code
  /*
  setTimeout(() => {
    // if (popUpoffset.offsetLeft > 400) {
    console.log(popUpoffset.offsetLeft);
    player.style.top = `${popUpoffset.offsetHeight - 600}px`;
    let leftShif = (popUpoffset.offsetLeft / 2 + player.offsetWidth / 2) / 2 / 2.5;
    // let leftShif = popUpoffset.offsetLeft / 2;
    // leftShif = leftShif - 82;
    alert(`leftShif: ${leftShif}`);
    player.style.transform = "translateX( " + leftShif + "px)";
    player.style.transition = "2s ease-in";
    // }
  }, 600);
  */
  // sagar code
  setTimeout(() => {
    // if (popUpoffset.offsetLeft > 400) {
    console.log(popUpoffset.offsetLeft);
    let leftShif = popUpoffset.offsetLeft / 2;
    if (window.innerWidth <= 1536) {
      leftShif = leftShif - 22;
    } else {
      leftShif = leftShif + 62;
    }
    player.style.transform = "translateX( " + leftShif + "px)";
    player.style.transition = "2s ease-in";
    // }
  }, 600);
});
closeButtons.forEach(closeButton => {
  closeButton.addEventListener("click", () => {
    document.body.classList.remove("overflow-h", "--brandOpen");
    closeButton.closest(".popUp").classList.remove("active");
    if (document.querySelector(".js-contact-state")) document.querySelector(".js-contact-state").classList.remove("active");
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
    var checkedCategories = Array.prototype.slice.call(checkboxes).filter(function (checkbox) {
      return checkbox.checked;
    }).map(function (checkbox) {
      return checkbox.value;
    });
    formData.append("idea", checkedCategories.join(", "));
    // If there are no errors, submit the form
    if (formValid) {
      formData.append("letsTalk", true);
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "form/mail.php", true);
      xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
          if (xhr.status === 200 && xhr.responseText === "mail sent") {
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
//# sourceMappingURL=main.js.map