/*
This project is written by Javid Sadeghi Ashrafi
javid.sadeghi@gmail.com
*/

let gameBox = document.querySelector('#game-box');
let steps = document.querySelector('#steps');
let goals = document.querySelector('#goals');
let win = document.querySelector('#win');

//creat game class
let game = new Game(tileMap01.width, tileMap01.height, tileMap01.mapGrid, gameBox, document);


//build game field
game.organizeField();

//wait for press key
document.addEventListener('keydown', e => {
  e.preventDefault();

  //check if complete all goals
  if (game.winCheck()) {
    win.style.display = 'block';
  } else {
    switch (e.key) {
      case 'ArrowUp':
        game.moveTop();
        e.returnValue = false;
        break;
      case 'ArrowDown':
        game.moveBottom();
        e.returnValue = false;
        break;
      case 'ArrowRight':
        game.moveRight();
        e.returnValue = false;
        break;
      case 'ArrowLeft':
        game.moveLeft();
        e.returnValue = false;
        break;
    }

    //show steps and goals
    steps.textContent = JSON.stringify(game.stepCounter);
    goals.textContent = JSON.stringify(game.goalCounter);
  }


});



