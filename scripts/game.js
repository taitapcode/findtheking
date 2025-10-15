// Initial game settings
const size = 8;
const cellSize = 60;
const totalGuesses = 5;

// Initalize DOM elements and game state variables
const boardGame = document.querySelector('.board-game');
const guessesDisplay = document.querySelector('.guesses');
const resetButton = document.querySelector('.reset');
const toggleQuestions = document.querySelector('.toggleQuestions');
const grid = Array.from({ length: size }, () => Array(size).fill(0)); // Generate the grid size x size filled with 0

let isStarted = false;
let isReady = true;
let isWin = false;
let king = [-1, -1];
let currentGuess = 0;
let isAwaitingAnswer = false;

let questionsEnabled = true;

if (toggleQuestions) {
  toggleQuestions.checked = true;
  questionsEnabled = toggleQuestions.checked;

  toggleQuestions.addEventListener('change', () => {
    questionsEnabled = toggleQuestions.checked;
    if (!questionsEnabled && isAwaitingAnswer) {
      isAwaitingAnswer = false;
      const modal = document.querySelector('.modal');
      if (modal) modal.dataset.locked = 'false';
      if (typeof closeModal === 'function') closeModal(true);
    }
    updateGuessesDisplay();
  });
}

// Determines if a cell should be light colored based on chessboard pattern
function isLightCell(row, col) {
  if (col % 2 == row % 2) return true;
  return false;
}

// Convert a number to its corresponding letter (1 -> a, 2 -> b, etc.)
function numberToLetter(num) {
  return String.fromCharCode(96 + num);
}

// Calculate the shortest path for a king to reach a cell
function shortestPath(cell, king) {
  return Math.max(Math.abs(cell[0] - king[0]), Math.abs(cell[1] - king[1]));
}

// Label the cell with the distance or a king icon if distance is 0 when clicked
function labelCell(row, col, distance, userClick = false) {
  const rowDiv = boardGame.getElementsByClassName('row')[row];
  const cellDiv = rowDiv.getElementsByClassName('cell')[col];
  // When distance is 0, display a king icon and end the game
  if (distance === 0) {
    cellDiv.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="currentColor" d="M19 22H5v-2h14zm-2-12c-1.42 0-2.74.77-3.45 2H13V7h3V5h-3V2h-2v3H8v2h3v5h-.55C9.35 10.09 6.9 9.43 5 10.54A4.013 4.013 0 0 0 3.5 16c.74 1.24 2.07 2 3.5 2h10a4 4 0 0 0 4-4a4 4 0 0 0-4-4"/></svg>';
    if (userClick) isWin = true;
  } else cellDiv.textContent = distance;
}

// Spawn the king in a random position not equal to the clicked cell
function spawnKingRandomly(selectedRow, selectedCol) {
  do {
    king = [Math.floor(Math.random() * size), Math.floor(Math.random() * size)];
  } while (king[0] === selectedRow && king[1] === selectedCol);
}

// Update the display of remaining guesses or win/lose message
function updateGuessesDisplay() {
  const guessesLeft = totalGuesses - currentGuess;
  let guessText;

  if (isWin) guessText = 'You Win!';
  else if (guessesLeft <= 0) guessText = 'You Lose!';
  else guessText = `Guesses left: ${guessesLeft}`;

  guessesDisplay.textContent = guessText;
}

// Handle cell click events
function onCellClick(row, col) {
  if (!isReady || isAwaitingAnswer) return;

  const handleGuess = () => {
    if (!isStarted) {
      resetGame();
      isStarted = true;
      spawnKingRandomly(row, col);
    }

    if (!grid[row][col]) {
      currentGuess++;
      grid[row][col] = 1;
      const distance = shortestPath([row, col], king);
      labelCell(row, col, distance, true);

      updateGuessesDisplay();
      if (currentGuess >= totalGuesses || distance === 0) endState();
    }
  };

  const shouldAskQuestion =
    questionsEnabled &&
    window.questionManager &&
    typeof window.questionManager.askQuestion === 'function';

  if (shouldAskQuestion) {
    isAwaitingAnswer = true;
    window.questionManager
      .askQuestion()
      .then(() => {
        isAwaitingAnswer = false;
        handleGuess();
      })
      .catch(() => {
        isAwaitingAnswer = false;
        handleGuess();
      });
  } else {
    handleGuess();
  }
}

function resetGame() {
  isReady = true;
  isWin = false;
  isStarted = false;
  currentGuess = 0;
  isAwaitingAnswer = false;
  const cells = Array.from(boardGame.getElementsByClassName('cell'));

  grid.forEach((row) => row.fill(0));
  resetButton.textContent = 'Reset';
  cells.forEach((cell) => (cell.innerHTML = ''));
  updateGuessesDisplay();
}

// End the game state
function endState() {
  isReady = false;
  labelCell(king[0], king[1], 0);
  updateGuessesDisplay();
  resetButton.textContent = 'Again';
}

// Set CSS variables for board size and cell size
boardGame.style.setProperty('--grid', size);
boardGame.style.setProperty('--cell-size', cellSize + 'px');

// Initial display of guesses
updateGuessesDisplay();

// Render the chessboard
for (let row = 0; row < size; row++) {
  const rowDiv = document.createElement('div');

  rowDiv.classList.add('row');
  rowDiv.dataset.row = size - row;

  for (let col = 0; col < size; col++) {
    const cellDiv = document.createElement('div');

    cellDiv.classList.add('cell');
    cellDiv.classList.add(isLightCell(row, col) ? 'light' : 'dark');
    if (row == size - 1) cellDiv.dataset.letter = numberToLetter(col + 1);

    cellDiv.addEventListener('click', () => onCellClick(row, col));

    rowDiv.appendChild(cellDiv);
  }

  boardGame.appendChild(rowDiv);
}

resetButton.addEventListener('click', resetGame);
