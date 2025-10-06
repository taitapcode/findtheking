const size = 8;
const boardGame = document.getElementById('board-game');
const grid = Array.from({ length: size }, () => Array(size).fill(0));

function isLightCell(row, col) {
  if (col % 2 == row % 2) return true;
  return false;
}

// Render the board
for (let row = 0; row < size; row++) {
  const rowDiv = document.createElement('div');
  rowDiv.classList.add(`r-${row + 1}`);

  for (let col = 0; col < size; col++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    cellDiv.classList.add(isLightCell(row, col) ? 'light' : 'dark');
    rowDiv.appendChild(cellDiv);
  }

  boardGame.appendChild(rowDiv);
}
