const size = 8;
const cellSize = 60;
const boardGame = document.getElementById('board-game');
const resetButton = document.getElementById('reset');
const grid = Array.from({ length: size }, () => Array(size).fill(0)); // Generate the grid size x size filled with 0

let isStarted = false;
let isReady = true;
let king = [-1, -1];

// Determines if a cell should be light colored based on chessboard pattern
function isLightCell(row, col) {
  if (col % 2 == row % 2) return true;
  return false;
}

function numberToLetter(num) {
  return String.fromCharCode(96 + num);
}

// Calculate the shortest path for a king to reach a cell
function shortestPath(cell, king) {
  return Math.max(Math.abs(cell[0] - king[0]), Math.abs(cell[1] - king[1]));
}

// Label the cell with the distance or a king icon if distance is 0 when clicked
function labelCell(row, col, distance) {
  const rowDiv = boardGame.getElementsByClassName('row')[row];
  const cellDiv = rowDiv.getElementsByClassName('cell')[col];
  // When distance is 0, display a king icon and end the game
  if (distance === 0) {
    cellDiv.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22H5v-2h14zm-2-12c-1.42 0-2.74.77-3.45 2H13V7h3V5h-3V2h-2v3H8v2h3v5h-.55C9.35 10.09 6.9 9.43 5 10.54A4.013 4.013 0 0 0 3.5 16c.74 1.24 2.07 2 3.5 2h10a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/></svg>';
    endState();
  } else cellDiv.textContent = distance;
}

// Spawn the king in a random position not equal to the clicked cell
function spawnKingRandomly(selectedRow, selectedCol) {
  do {
    king = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
  } while (king[0] === selectedRow && king[1] === selectedCol);
}

// Handle cell click events
function onCellClick(row, col) {
  if (!isReady) return;

  if (!isStarted) {
    resetGame();
    isStarted = true;
    spawnKingRandomly(row, col);
  }

  if (!grid[row][col]) {
    grid[row][col] = 1;
    labelCell(row, col, shortestPath([row, col], king));
  }
}

function resetGame() {
  isReady = true;
  isStarted = false;
  const cells = Array.from(boardGame.getElementsByClassName('cell'));

  grid.forEach((row) => row.fill(0));
  resetButton.textContent = 'Reset';
  cells.forEach((cell) => (cell.innerHTML = ''));
}

function endState() {
  isReady = false;
  resetButton.textContent = 'Again';
}

// Set CSS variables for board size and cell size
boardGame.style.setProperty('--grid', size);
boardGame.style.setProperty('--cell-size', cellSize + 'px');

// Render the chessboard
for (let row = 0; row < size; row++) {
  const rowDiv = document.createElement('div');

  rowDiv.classList.add('row');
  rowDiv.dataset.row = 8 - row;

  for (let col = 0; col < size; col++) {
    const cellDiv = document.createElement('div');

    cellDiv.classList.add('cell');
    cellDiv.classList.add(isLightCell(row, col) ? 'light' : 'dark');
    cellDiv.dataset.col = col + 1;
    cellDiv.dataset.letter = numberToLetter(col + 1);

    cellDiv.addEventListener('click', () => onCellClick(row, col));

    rowDiv.appendChild(cellDiv);
  }

  boardGame.appendChild(rowDiv);
}

resetButton.addEventListener('click', resetGame);
