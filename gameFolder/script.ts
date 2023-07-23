
const hero = document.querySelector('.hero');
const map = document.querySelector('.map');

const mapWidth = map.offsetWidth;
const mapHeight = map.offsetHeight;

let heroX = 200; // Initial X position
let heroY = 200; // Initial Y position
const heroSpeed = 10; // Adjust this value to control the hero's movement speed

function updateHeroPosition() {
  hero.style.transform = `translate(${heroX}px, ${heroY}px)`;
}

function moveHero(event) {
  switch (event.key) {
    case 'ArrowUp':
      heroY -= heroSpeed;
      if (heroY < 0) heroY = 0;
      break;
    case 'ArrowDown':
      heroY += heroSpeed;
      if (heroY > mapHeight - hero.offsetHeight) heroY = mapHeight - hero.offsetHeight;
      break;
    case 'ArrowLeft':
      heroX -= heroSpeed;
      if (heroX < 0) heroX = 0;
      break;
    case 'ArrowRight':
      heroX += heroSpeed;
      if (heroX > mapWidth - hero.offsetWidth) heroX = mapWidth - hero.offsetWidth;
      break;
  }

  updateHeroPosition();
}

document.addEventListener('keydown', moveHero);