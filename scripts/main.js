const size = 8;
const boardGame = document.getElementById('board-game');
const grid = Array.from({ length: size }, () => Array(size).fill(0));

function isLightCell(row, col) {
  if (col % 2 == row % 2) return true;
  return false;
}

// Render the board
for (let col = 0; col < size; col++) {
  const colDiv = document.createElement('div');
  colDiv.classList.add(`col-${col + 1}`);

  for (let row = 0; row < size; row++) {
    const cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    cellDiv.classList.add(isLightCell(row, col) ? 'light' : 'dark');
    cellDiv.onclick = () => console.log(`Clicked on cell (${row}, ${col})`);
    colDiv.appendChild(cellDiv);
  }

  boardGame.appendChild(colDiv);
}
