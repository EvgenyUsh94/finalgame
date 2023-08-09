"use strict";

var stars = document.querySelectorAll('.star');
var ratingMessage = document.querySelector('.rating-message');
var currentRating = 0;
stars.forEach(function (star, index) {
  star.addEventListener('mouseover', function () {
    resetStars();

    for (var i = 0; i <= index; i++) {
      stars[i].classList.add('active');
    }
  });
  star.addEventListener('mouseout', function () {
    resetStars();

    if (currentRating > 0) {
      for (var i = 0; i < currentRating; i++) {
        stars[i].classList.add('active');
      }

      ratingMessage.textContent = "You've rated: ".concat(currentRating, " star(s)");
    } else {
      ratingMessage.textContent = "Hover to rate:";
    }
  });
  star.addEventListener('click', function () {
    currentRating = index + 1;
    ratingMessage.textContent = "Thank you for your vote! You've rated: ".concat(currentRating, " star(s)");
    window.location.href = "../index.html";
  });
});

function resetStars() {
  stars.forEach(function (star) {
    star.classList.remove('active');
  });
}