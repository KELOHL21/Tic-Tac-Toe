
const gameboard = document.querySelector("#gameboard");

const infoDisplay = document.querySelector("#info");

const startCells = [
   "","","","","","","","",""
]

let play = 'circle';

infoDisplay.textContent = "Circle Plays First"

function creatBoard() {
   startCells.forEach((_cell, index) => {

      const cellElement = document.createElement('div');

      cellElement.classList.add('square');

      cellElement.id = index;

      cellElement.addEventListener('click', playGo)

      gameboard.append(cellElement);

   } )
}

creatBoard();

function playGo(e) {

   const playDisplay = document.createElement('div');

   playDisplay.classList.add(play);

   e.target.append(playDisplay);

   // Over rides circle
   play = play === 'circle' ? 'cross' : 'circle';

   infoDisplay.textContent = play + ' plays.';

   e.target.removeEventListener('click', playGo);

   checkScore();
};

function checkScore() {

   const allSquares = document.querySelectorAll('.square')

   const winningCombo = [
         [0,1,2], [3,4,5], [6,7,8],
         [0,3,6], [1,4,7], [2,5,8],
         [0,4,8],[2,4,6]
   ]

   winningCombo.forEach(array => {

    const circleWin =  array.every(cell => allSquares[cell].firstChild?.classList.contains('circle'));

    if (circleWin) {
      infoDisplay.textContent = 'Circle Wins!';
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }

   })

   winningCombo.forEach(array => {

    const crossWin =  array.every(cell => allSquares[cell].firstChild?.classList.contains('cross'));

    if (crossWin) {
      infoDisplay.textContent = 'Cross Wins!';
      allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
      return
    }

   })

}


