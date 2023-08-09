document.addEventListener('DOMContentLoaded', function () {
  const musicPlayer = document.getElementById('music-player');
  const buttons = document.querySelectorAll('.music-buttons button');
  const rockButton = document.getElementById('rock-button');
  const popButton = document.getElementById('pop-button');
  const hiphopButton = document.getElementById('hiphop-button');
  const electroButton = document.getElementById('electro-button');
  const audioSource = document.getElementById('audio-source');

  // Set the audio source and play it when a button is clicked
  rockButton.addEventListener('click', function() {
    audioSource.src = 'gamesFolder\Aerosmith - Dude (Looks Like A Lady) (Official Music Video).mp3'; 
    musicPlayer.load();
    musicPlayer.play();
  });

  popButton.addEventListener('click', function() {
    audioSource.src = 'gamesFolder\shakira.mp3'; 
    musicPlayer.load();
    musicPlayer.play();
  });

  hiphopButton.addEventListener('click', function() {
    audioSource.src = 'gamesFolder\Scorpions - Rock You Like A Hurricane (Official Music Video).mp3'; 
    musicPlayer.load();
    musicPlayer.play();
  });

  electroButton.addEventListener('click', function() {
    audioSource.src = 'gamesFolder\onlymp3.to - David Guetta Titanium ft. Sia Official Video -JRfuAukYTKg-192k-1691331674.mp3';
    musicPlayer.load();
    musicPlayer.play();
  });

  const musicLibrary = {
    rock: "../gamesFolder\krypto.mp3",
    pop: "../gamesFolder\shakira.mp3",
    hiphop: "../snake game/Aerosmith - Dude (Looks Like A Lady) (Official Music Video).mp3",
    electro: "../gamesFolder\onlymp3.to - David Guetta Titanium ft. Sia Official Video -JRfuAukYTKg-192k-1691331674.mp3"
  };
  
  buttons.forEach(button => {
    button.addEventListener('click', function () {
      const musicType = this.id.replace('-button', ''); // Extract music type from button id
      const musicPath = musicLibrary[musicType];
  
      if (musicPath) {
        audioSource.src = musicPath;
        musicPlayer.load();
        musicPlayer.play();
      }
    });
  });
  

  
    buttons.forEach(button => {
      button.addEventListener('click', function () {
        const musicType = this.id.replace('-button', ''); // Extract music type from button id
        const musicPath = musicLibrary[musicType];
  
        if (musicPath) {
          musicPlayer.src = musicPath;
          musicPlayer.play();
        }
      });
    });
  
    const soundButton = document.getElementById('sound-button');
    soundButton.addEventListener('click', function () {
      if (musicPlayer.muted) {
        musicPlayer.muted = false;
        this.textContent = 'Enable Sound';
      } else {
        musicPlayer.muted = true;
        this.textContent = 'Disable Sound';
      }
    });


class Snake {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.tail = [{ x: this.x, y: this.y }];
        this.rotateX = 0;
        this.rotateY = 1;
        
    }

    moveBy() {
        var newRect;
        if (this.rotateX == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x + this.size,
                y: this.tail[this.tail.length - 1].y
            };
        } else if (this.rotateX == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x - this.size,
                y: this.tail[this.tail.length - 1].y
            };
        } else if (this.rotateY == 1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y + this.size
            };
        } else if (this.rotateY == -1) {
            newRect = {
                x: this.tail[this.tail.length - 1].x,
                y: this.tail[this.tail.length - 1].y - this.size
            };
        }

        this.tail.shift();
        this.tail.push(newRect);
    }
}

class Apple {
    constructor() {
        var isTouching;
        while (true) {
            isTouching = false;
            this.x = Math.floor(Math.random() * canvas.width / snake.size) * snake.size;
            this.y = Math.floor(Math.random() * canvas.height / snake.size) * snake.size;
            for (var i = 0; i < snake.tail.length; i++) {
                if (this.x == snake.tail[i].x && this.y == snake.tail[i].y) {
                    isTouching = true;
                }
            }
            if (!isTouching) {
                break;
            }
        }
        this.color = "pink";
        this.size = snake.size;
    }
}

var canvas = document.getElementById('snakegame');
var snake = new Snake(20, 20, 20);
var apple = new Apple();
var canvasContext = canvas.getContext('2d');

function gameLoop() {
    setInterval(show, 1000 / 15);
}

function show() {
    update();
    draw();
}

function update() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    snake.moveBy();
    eatApple();
    checkHitWall();
     if (snake.tail.length - 1 >= 8) {
        // Trigger the pop-up window here
        showRatingPopup();
}
}

function checkHitWall() {
    var headTail = snake.tail[snake.tail.length - 1];
    if (headTail.x == -snake.size) {
        headTail.x = canvas.width - snake.size;
    } else if (headTail.x == canvas.width) {
        headTail.x = 0;
    } else if (headTail.y == -snake.size) {
        headTail.y = canvas.height - snake.size;
    } else if (headTail.y == canvas.height) {
        headTail.y = 0;
    }
}

function eatApple() {
    if (
        snake.tail[snake.tail.length - 1].x == apple.x &&
        snake.tail[snake.tail.length - 1].y == apple.y
    ) {
        snake.tail.push({ x: apple.x, y: apple.y });
        apple = new Apple();
    }
}

function draw() {
    createRect(0, 0, canvas.width, canvas.height, 'black');
    for (var i = 0; i < snake.tail.length; i++) {
        createRect(
            snake.tail[i].x + 2.5,
            snake.tail[i].y + 2.5,
            snake.size - 5,
            snake.size - 5,
            'white'
        );
    }
    


    canvasContext.font = "20px Arial";
    canvasContext.fillStyle = "#00FF42";
    canvasContext.fillText("Score: " + (snake.tail.length - 1), canvas.width - 120, 18);
    createRect(apple.x, apple.y, apple.size, apple.size, apple.color);
}

function showRatingPopup() {
    // Display a pop-up or a modal to collect user rating
    // You can customize this as per your requirements
    var popup = confirm("You've reached a score of 8! Would you like to rate the game?");
    if (popup) {
        // Redirect the user to a rating page
        window.location.href = "../gamesFolder/star.html";
    } else {
        // Update the score and continue the game

        snake.tail.push({ x: apple.x, y: apple.y });
        apple = new Apple();
        gameLoop();
        window.location.href = "../index.html";
    }
}




function createRect(x, y, width, height, color) {
    canvasContext.fillStyle = color || 'white';
    canvasContext.fillRect(x, y, width, height);
}

window.addEventListener('keydown', (event) => {
    if (event.keyCode == 37 && snake.rotateX != 1) {
        snake.rotateX = -1;
        snake.rotateY = 0;
    } else if (event.keyCode == 38 && snake.rotateY != 1) {
        snake.rotateX = 0;
        snake.rotateY = -1;
    } else if (event.keyCode == 39 && snake.rotateX != -1) {
        snake.rotateX = 1;
        snake.rotateY = 0;
    } else if (event.keyCode == 40 && snake.rotateY != -1) {
        snake.rotateX = 0;
        snake.rotateY = 1;
    }
});

window.onload = () => {
    gameLoop();
    
};
});

