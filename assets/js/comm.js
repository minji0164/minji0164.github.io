document.addEventListener("DOMContentLoaded", function () {
  (function () {
    "use strict";

    function trackScroll() {
      var scrolled = window.pageYOffset;
      var coords = document.documentElement.clientHeight;

      if (scrolled > coords) {
        goTopBtn.classList.add("back_to_top-show");
      }
      if (scrolled < coords) {
        goTopBtn.classList.remove("back_to_top-show");
      }
    }

    function backToTop() {
      if (window.pageYOffset > 0) {
        window.scrollBy(0, -60);
        setTimeout(backToTop, 10);
      }
    }

    var goTopBtn = document.querySelector(".back_to_top");

    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", backToTop);
  })();

  function drawText(word) {
    word = word || "WELCOME!";
    var wordArray = word.split("");
    var innerTextElement = document.getElementById("inner-text");
    innerTextElement.innerHTML = "";
    innerTextElement.classList.remove("done-animating");
    wordArray.forEach(function (letter, index) {
      var span = document.createElement("span");
      span.textContent = letter;
      span.className = "letter animate";
      span.style["animation-delay"] = 100 * index + "ms";
      innerTextElement.appendChild(span);

      if (index === wordArray.length - 1) {
        span.addEventListener("animationend", function () {
          innerTextElement.classList.add("done-animating");
        });
      }
    });
  }

  document
    .getElementById("custom-text-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();
      e.stopPropagation();
      drawText(document.getElementById("custom-text").value);
    });

  drawText();

  // Smooth scroll functionality for navigation links
  document.querySelectorAll("nav a").forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop,
          behavior: "smooth",
        });
      }
    });
  });

  document.querySelectorAll(".mob-box").forEach(function (mobBox) {
    const mobBoxInner = mobBox.querySelector(".mob-box-inner");

    mobBox.addEventListener("mouseover", function () {
      mobBoxInner.style.backgroundPosition = "bottom";
    });

    mobBox.addEventListener("mouseout", function () {
      mobBoxInner.style.backgroundPosition = "top";
    });
  });

  AOS.init({
    duration: 500,
  });

  // Initialize Splitting
  Splitting();
});
