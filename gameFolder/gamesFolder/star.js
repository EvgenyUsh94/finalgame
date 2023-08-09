const stars = document.querySelectorAll('.star');
const ratingMessage = document.querySelector('.rating-message');

let currentRating = 0;

stars.forEach((star, index) => {
    star.addEventListener('mouseover', () => {
        resetStars();
        for (let i = 0; i <= index; i++) {
            stars[i].classList.add('active');
        }
    });

    star.addEventListener('mouseout', () => {
        resetStars();
        if (currentRating > 0) {
            for (let i = 0; i < currentRating; i++) {
                stars[i].classList.add('active');
            }
            ratingMessage.textContent = `You've rated: ${currentRating} star(s)`;
        } else {
            ratingMessage.textContent = `Hover to rate:`;
        }
    });

    star.addEventListener('click', () => {
        currentRating = index + 1;
        ratingMessage.textContent = `Thank you for your vote! You've rated: ${currentRating} star(s)`;
        window.location.href = "../index.html"
    });
});

function resetStars() {
    stars.forEach(star => {
        star.classList.remove('active');
    });
}