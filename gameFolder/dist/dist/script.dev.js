"use strict";

var hero = document.querySelector('.hero');
var map = document.querySelector('canvas');
var context = map === null || map === void 0 ? void 0 : map.getContext('2d');
context === null || context === void 0 ? void 0 : context.fillRect(0, 0, map === null || map === void 0 ? void 0 : map.width, map === null || map === void 0 ? void 0 : map.height);
var world = new Image();
world.src = './world.jpeg';

world.onload = function () {
  context === null || context === void 0 ? void 0 : context.drawImage(world, 0, 0);
}; // const blockers=document.querySelector('.blockers')
// const mapWidth = map.offsetWidth;
// const mapHeight = map.offsetHeight;
// let heroX = 200; // Initial X position
// let heroY = mapHeight - hero.offsetHeight - 50;
// const heroSpeed = 10; // Adjust this value to control the hero's movement speed
// function updateHeroPosition() {
//   const maxY = mapHeight - hero.offsetHeight; // Maximum Y position (bottom of the map)
//   // Limit the hero's Y position to the map boundaries
//   heroY = Math.min(Math.max(heroY, 0), maxY);
//   hero.style.transform = `translate(${heroX}px, ${heroY}px)`;
//   // Calculate the map translation based on heroY and window.innerHeight
//   const mapTranslateY = -(heroY - window.innerHeight / 2 + hero.offsetHeight / 2);
//   // Move the map up and down based on heroY
//   map.style.transform = `translate(0, ${mapTranslateY}px)`;
// }
// function moveHero(event) {
//   // event.preventDefault()
//   switch (event.key) {
//     case 'ArrowUp':
//       heroY -= heroSpeed;
//       if (heroY < 0) heroY = 0;
//       break;
//     case 'ArrowDown':
//       heroY += heroSpeed;
//       if (heroY > mapHeight - hero.offsetHeight) heroY = mapHeight - hero.offsetHeight;
//       break;
//     case 'ArrowLeft':
//       heroX -= heroSpeed;
//       if (heroX < 0) heroX = 0;
//       break;
//     case 'ArrowRight':
//       heroX += heroSpeed;
//       if (heroX > mapWidth - hero.offsetWidth) heroX = mapWidth - hero.offsetWidth;
//       break;
//   }
//   updateHeroPosition();
// }
// function collisionTest(){
// }
// document.addEventListener('keydown', moveHero);