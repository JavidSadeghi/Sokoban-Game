/*
This project is written by Javid Sadeghi Ashrafi
javid.sadeghi@gmail.com
*/

class Game {
  constructor(wItemsCount, hItemsCount, gameMap, gameBox) {
    this.imgsWidth = 51;
    this.imgsHeight = 51;
    this.wItemsCount = wItemsCount;
    this.hItemsCount = hItemsCount;
    this.boxWidth = this.wItemsCount * this.imgsWidth;
    this.boxHeight = this.hItemsCount * this.imgsHeight;
    this.imageElements = '';
    this.gameMap = gameMap;
    this.gameBox = gameBox;
    this.goalCounter = 0;
    this.stepCounter = 0;
  }

  //Show Game Field
  organizeField() {
    this.gameBox.style.width = `${this.boxWidth}px`;
    this.gameBox.style.height = `${this.boxHeight}px`;
    let k = 0;

    for (let h = 0; h < this.hItemsCount; h++) {
      for (let w = 0; w < this.wItemsCount; w++) {
        switch (this.gameMap[h][w][0]) {
          case 'W':
            this.imageElements += `<img id="${h * this.wItemsCount + w}" src="../images/wall.png" style="position: absolute; left:${w * this.imgsHeight}px; top:${h * this.imgsWidth}px">`;
            break;
          case 'B':
            this.imageElements += `<img id="${h * this.wItemsCount + w}" src="../images/box.png" style="position: absolute; left:${w * this.imgsHeight}px; top:${h * this.imgsWidth}px">`;
            break;
          case 'G':
            this.imageElements += `<img id="${h * this.wItemsCount + w}" src="../images/gole.png" style="position: absolute; left:${w * this.imgsHeight}px; top:${h * this.imgsWidth}px">`;
            k++;
            break;
          case 'P':
            this.imageElements += `<img id="${h * this.wItemsCount + w}" src="../images/player.png" style="position: absolute; left:${w * this.imgsHeight}px; top:${h * this.imgsWidth}px">`;
            break;
          case 'PG':
            this.imageElements += `<img id="${h * this.wItemsCount + w}" src="../images/player.png" style="position: absolute; left:${w * this.imgsHeight}px; top:${h * this.imgsWidth}px">`;
            break;
          case 'BP':
            this.imageElements += `<img id="${h * this.wItemsCount + w}" src="../images/boxgol.png" style="position: absolute; left:${w * this.imgsHeight}px; top:${h * this.imgsWidth}px">`;
            break;
          default:
            this.imageElements += `<img id="${h * this.wItemsCount + w}" src="../images/grass.png" style="position: absolute; left:${w * this.imgsHeight}px; top:${h * this.imgsWidth}px">`;
            break;
        }

      }
    }

    this.goalCounter = k;
    this.gameBox.innerHTML = this.imageElements;
  }

  moveTop() {
    for (let h = 0; h < this.hItemsCount; h++) {
      for (let w = 0; w < this.wItemsCount; w++) {
        if (this.gameMap[h][w][0] === 'P' || this.gameMap[h][w][0] === 'PG') {
          if (this.gameMap[h - 1][w][0] === ' ') {
            game.showPiece('P', h - 1, w);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h - 1][w][0] === 'G') {
            game.showPiece('PG', h - 1, w);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h - 1][w][0] === 'B') {
            if (this.gameMap[h - 2][w][0] === ' ') {
              game.showPiece('B', h - 2, w);
              game.showPiece('P', h - 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h - 2][w][0] === 'G') {
              game.showPiece('BG', h - 2, w);
              this.goalCounter--;
              game.showPiece('P', h - 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          } else if (this.gameMap[h - 1][w][0] === 'BG') {
            if (this.gameMap[h - 2][w][0] === ' ') {
              game.showPiece('B', h - 2, w);
              this.goalCounter++;
              game.showPiece('PG', h - 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h - 2][w][0] === 'G') {
              game.showPiece('BG', h - 2, w);
              game.showPiece('PG', h - 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          }
        }
      }
    }
  }

  //Move Bottom
  moveBottom() {
    for (let h = 0; h < this.hItemsCount; h++) {
      for (let w = 0; w < this.wItemsCount; w++) {
        if (this.gameMap[h][w][0] === 'P' || this.gameMap[h][w][0] === 'PG') {
          if (this.gameMap[h + 1][w][0] === ' ') {
            game.showPiece('P', h + 1, w);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h + 1][w][0] === 'G') {
            game.showPiece('PG', h + 1, w);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h + 1][w][0] === 'B') {
            if (this.gameMap[h + 2][w][0] === ' ') {
              game.showPiece('B', h + 2, w);
              game.showPiece('P', h + 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h + 2][w][0] === 'G') {
              game.showPiece('BG', h + 2, w);
              this.goalCounter--;
              game.showPiece('P', h + 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          } else if (this.gameMap[h + 1][w][0] === 'BG') {
            if (this.gameMap[h + 2][w][0] === ' ') {
              game.showPiece('B', h + 2, w);
              this.goalCounter++;
              game.showPiece('PG', h + 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h + 2][w][0] === 'G') {
              game.showPiece('BG', h + 2, w);
              game.showPiece('PG', h + 1, w);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          }
        }
      }
    }
  }

  //Move Right
  moveRight() {
    for (let h = 0; h < this.hItemsCount; h++) {
      for (let w = 0; w < this.wItemsCount; w++) {
        if (this.gameMap[h][w][0] === 'P' || this.gameMap[h][w][0] === 'PG') {
          if (this.gameMap[h][w + 1][0] === ' ') {
            game.showPiece('P', h, w + 1);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h][w + 1][0] === 'G') {
            game.showPiece('PG', h, w + 1);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h][w + 1][0] === 'B') {
            if (this.gameMap[h][w + 2][0] === ' ') {
              game.showPiece('B', h, w + 2);
              game.showPiece('P', h, w + 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h][w + 2][0] === 'G') {
              game.showPiece('BG', h, w + 2);
              this.goalCounter--;
              game.showPiece('P', h, w + 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          } else if (this.gameMap[h][w + 1][0] === 'BG') {
            if (this.gameMap[h][w + 2][0] === ' ') {
              game.showPiece('B', h, w + 2);
              this.goalCounter++;
              game.showPiece('PG', h, w + 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h][w + 2][0] === 'G') {
              game.showPiece('BG', h, w + 2);
              game.showPiece('PG', h, w + 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          }
        }
      }
    }
  }

  //Move Left
  moveLeft() {
    for (let h = 0; h < this.hItemsCount; h++) {
      for (let w = 0; w < this.wItemsCount; w++) {
        if (this.gameMap[h][w][0] === 'P' || this.gameMap[h][w][0] === 'PG') {
          if (this.gameMap[h][w - 1][0] === ' ') {
            game.showPiece('P', h, w - 1);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h][w - 1][0] === 'G') {
            game.showPiece('PG', h, w - 1);
            if (this.gameMap[h][w][0] === 'PG') {
              game.showPiece('G', h, w);
            } else {
              game.showPiece(' ', h, w);
            }
            this.stepCounter++;
            return;
          } else if (this.gameMap[h][w - 1][0] === 'B') {
            if (this.gameMap[h][w - 2][0] === ' ') {
              game.showPiece('B', h, w - 2);
              game.showPiece('P', h, w - 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h][w - 2][0] === 'G') {
              game.showPiece('BG', h, w - 2);
              this.goalCounter--;
              game.showPiece('P', h, w - 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          } else if (this.gameMap[h][w - 1][0] === 'BG') {
            if (this.gameMap[h][w - 2][0] === ' ') {
              game.showPiece('B', h, w - 2);
              this.goalCounter++;
              game.showPiece('PG', h, w - 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            } else if (this.gameMap[h][w - 2][0] === 'G') {
              game.showPiece('BG', h, w - 2);
              game.showPiece('PG', h, w - 1);
              if (this.gameMap[h][w][0] === 'PG') {
                game.showPiece('G', h, w);
              } else {
                game.showPiece(' ', h, w);
              }
              this.stepCounter++;
              return;
            }
          }
        }
      }
    }
  }



  showPiece(letter, imgsHeight, imgsWidth) {
    let index = (imgsHeight * this.wItemsCount) + imgsWidth;

    switch (letter) {
      case 'W':
        this.gameBox.children[index].src = "../images/wall.png";
        this.gameMap[imgsHeight][imgsWidth][0] = letter;
        break;
      case 'B':
        this.gameBox.children[index].src = "../images/box.png";
        this.gameMap[imgsHeight][imgsWidth][0] = letter;
        break;
      case 'G':
        this.gameBox.children[index].src = "../images/gole.png";
        this.gameMap[imgsHeight][imgsWidth][0] = letter;
        break;
      case 'P':
        this.gameBox.children[index].src = "../images/player.png";
        this.gameMap[imgsHeight][imgsWidth][0] = letter;
        break;
      case 'PG':
        this.gameBox.children[index].src = "../images/player.png";
        this.gameMap[imgsHeight][imgsWidth][0] = letter;
        break;
      case 'BG':
        this.gameBox.children[index].src = "../images/boxgole.png";
        this.gameMap[imgsHeight][imgsWidth][0] = letter;
        break;
      default:
        this.gameBox.children[index].src = "../images/grass.png";
        this.gameMap[imgsHeight][imgsWidth][0] = letter;
        break;
    }

  }

  winCheck() {
    if (this.goalCounter === 0) {
      return 1;
    } else {
      return 0;
    }
  }


  //End of class
}
