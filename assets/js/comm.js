document.addEventListener("DOMContentLoaded", function () {
  //backToTop---------------------------------------------------
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
        window.scrollBy(0, -100);
        setTimeout(backToTop, 10);
      }
    }

    var goTopBtn = document.querySelector(".back_to_top");

    window.addEventListener("scroll", trackScroll);
    goTopBtn.addEventListener("click", backToTop);
  })();

  //intro animation---------------------------------------------------
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

  // Smooth scroll functionality for navigation links---------------------
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

  //mob-box auto scroll---------------------------------------------------
  document.querySelectorAll(".mob-box").forEach(function (mobBox) {
    const mobBoxInner = mobBox.querySelector(".mob-box-inner");

    mobBox.addEventListener("mouseover", function () {
      mobBoxInner.style.backgroundPosition = "bottom";
    });

    mobBox.addEventListener("mouseout", function () {
      mobBoxInner.style.backgroundPosition = "top";
    });
  });

  //easy chart---------------------------------------------------
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        $(entry.target).easyPieChart({
          scaleColor: "#fff",
          lineWidth: 10,
          lineCap: "butt",
          barColor: "rgba(0, 0, 0, 0.3)",
          trackColor: "#ecf0f1",
          size: 90,
          animate: 1000,
        });
        $(entry.target).removeClass("hidden");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll(".chart").forEach((chart) => {
    observer.observe(chart);
  });

  //animation circle text---------------------------------------------------
  const text = document.querySelector(".text");
  text.innerHTML = text.innerText
    .split("")
    .map(
      (char, i) => `<span style="transform:rotate(${i * 9}deg)">${char}</span>`
    )
    .join("");

  //aos---------------------------------------------------
  AOS.init({
    duration: 500,
  });

  //미모티콘 버튼---------------------------------------------------
  const btnWr = document.querySelector(".btn-wr");
  const introduce = document.querySelector(".introduce");
  const cirBtn = document.querySelector(".cir");

  btnWr.addEventListener("click", toggleIntroduce);
  cirBtn.addEventListener("click", hideIntroduce);

  // .introduce 요소의 초기 상태를 설정
  introduce.style.opacity = 0;

  // .introduce 요소의 오퍼시티를 토글하는 함수입니다.
  function toggleIntroduce() {
    if (introduce.style.opacity === "0") {
      introduce.style.opacity = 1;
    } else {
      introduce.style.opacity = 0;
    }
  }

  function hideIntroduce() {
    introduce.style.opacity = 0;
  }

  // Initialize Splitting
  Splitting();
});
