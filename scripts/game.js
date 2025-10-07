const size = 8;
const boardGame = document.getElementById('board-game');
const resetButton = document.getElementById('reset');
const grid = Array.from({ length: size }, () => Array(size).fill(0)); // Generate the grid size x size filled with 0

let isStarted = false;
let king = [-1, -1];

// Determines if a cell should be light colored based on chessboard pattern
function isLightCell(row, col) {
  if (col % 2 == row % 2) return true;
  return false;
}

function shortestPath(cell, king) {
  return Math.max(Math.abs(cell[0] - king[0]), Math.abs(cell[1] - king[1]));
}

function labelCell(row, col, distance) {
  const colDiv = boardGame.getElementsByClassName(`col-${col + 1}`)[0];
  const cellDiv = colDiv.getElementsByClassName('cell')[row];
  if (distance === 0) {
    cellDiv.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22H5v-2h14zm-2-12c-1.42 0-2.74.77-3.45 2H13V7h3V5h-3V2h-2v3H8v2h3v5h-.55C9.35 10.09 6.9 9.43 5 10.54A4.013 4.013 0 0 0 3.5 16c.74 1.24 2.07 2 3.5 2h10a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/></svg>';
  } else cellDiv.textContent = distance;
}
function randomSpawnKing(selectedRow, selectedCol) {
  do {
    king = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
  } while (king[0] === selectedRow && king[1] === selectedCol);
}

function onCellClick(row, col) {
  if (!isStarted) {
    isStarted = true;
    randomSpawnKing(row, col);
  }

  if (!grid[row][col]) {
    grid[row][col] = 1;
    labelCell(row, col, shortestPath([row, col], king));
  }
}

// Render the chessboard
for (let col = 0; col < size; col++) {
  const colDiv = document.createElement('div');
  colDiv.classList.add(`col-${col + 1}`);

  for (let row = 0; row < size; row++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    cellDiv.classList.add(isLightCell(row, col) ? 'light' : 'dark');
    cellDiv.addEventListener('click', () => onCellClick(row, col));
    colDiv.appendChild(cellDiv);
  }

  boardGame.appendChild(colDiv);
}

resetButton.addEventListener('click', () => {
  isStarted = false;
  grid.forEach((row) => row.fill(0));
  const cells = Array.from(boardGame.getElementsByClassName('cell'));
  cells.forEach((cell) => (cell.innerHTML = ''));
});
