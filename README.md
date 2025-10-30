# FindTheKing VibeCode

A strategic chess-inspired guessing game where players attempt to locate a hidden king on a chessboard within a limited number of moves.

## Game Overview

FindTheKing is a web-based puzzle game that combines elements of chess positioning with deductive reasoning. Players click on squares of an 8×8 chessboard to find the hidden king, receiving distance clues to guide their search.

## How to Play

1. **First Click**: Click any square on the board to start the game and randomly place the king
2. **Distance Clues**: Each clicked square shows the shortest distance (king's move distance) to the hidden king
3. **Limited Guesses**: You have 5 attempts to find the king
4. **Win Condition**: Click on the exact square where the king is hidden
5. **King's Movement**: Distance is calculated using king movement rules (can move one square in any direction, including diagonally)

## About This Project

This is **vibe code** - a fun, experimental project built for the joy of coding and exploration rather than production use. The project embodies the philosophy of creative, rapid development where the journey of building is just as important as the destination. This project was primarily **generated using AI assistance** (specifically OpenCode/Claude), demonstrating how AI can be used as a creative coding partner.

## Game Logic

The core game logic (`scripts/game.js`) includes:

- **Board Generation**: Creates an 8×8 grid with chessboard pattern
- **King Positioning**: Randomly places the king after the first click
- **Distance Calculation**: Uses Chebyshev distance (king's move distance)
- **Game State**: Manages guesses, win/lose conditions, and board state
- **Visual Feedback**: Updates cells with distance numbers or king icon

## Running the Game

Since this is a vanilla JavaScript project without Node.js dependencies, you can run it by:

1. **Direct file opening**: Simply open `index.html` in a web browser
2. **Using Bun**: If you have Bun installed, you can serve it locally:

   ```bash
   bun index.html
   ```

## License

This project is available for educational and personal use.
