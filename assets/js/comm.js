document.addEventListener("DOMContentLoaded", function () {
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
      span.style["animation-delay"] = 150 * index + "ms";
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
});
