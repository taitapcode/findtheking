# FindTheKing

A strategic chess-inspired guessing game where players attempt to locate a hidden king on a chessboard within a limited number of moves.

## Game Overview

FindTheKing is a web-based puzzle game that combines elements of chess positioning with deductive reasoning. Players click on squares of an 8×8 chessboard to find the hidden king, receiving distance clues to guide their search.

## How to Play

1. **First Click**: Click any square on the board to start the game and randomly place the king
2. **Distance Clues**: Each clicked square shows the shortest distance (king's move distance) to the hidden king
3. **Limited Guesses**: You have 5 attempts to find the king
4. **Win Condition**: Click on the exact square where the king is hidden
5. **King's Movement**: Distance is calculated using king movement rules (can move one square in any direction, including diagonally)

## Features

- **8×8 Chessboard**: Classic chessboard layout with alternating light and dark squares
- **Chess Notation**: Board includes row numbers (1-8) and column letters (a-h)
- **Distance Feedback**: Visual feedback showing the minimum moves needed to reach the king
- **Game State Management**: Track remaining guesses and win/lose states
- **Reset Functionality**: Start a new game at any time
- **Medieval Theme**: Custom UnifrakturCook font and gradient background for atmospheric styling

## Technical Stack

- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Build Tool**: Vite with custom configuration
- **Styling**: CSS with custom properties and Tailwind CSS integration
- **Font**: UnifrakturCook-Bold for medieval theming

## Project Structure

```
findtheking/
├── fonts/
│   └── UnifrakturCook-Bold.ttf    # Custom medieval font
├── scripts/
│   ├── game.js                    # Core game logic and board rendering
│   ├── modal.js                   # Modal functionality (placeholder)
│   └── question.js                # Questions feature (placeholder)
├── styles/
│   └── style.css                  # Game styling and layout
├── index.html                     # Main HTML structure
├── package.json                   # Dependencies and scripts
├── vite.config.ts                 # Vite configuration
└── README.md                      # Project documentation
```

## Game Logic

The core game logic (`scripts/game.js`) includes:

- **Board Generation**: Creates an 8×8 grid with chessboard pattern
- **King Positioning**: Randomly places the king after the first click
- **Distance Calculation**: Uses Chebyshev distance (king's move distance)
- **Game State**: Manages guesses, win/lose conditions, and board state
- **Visual Feedback**: Updates cells with distance numbers or king icon

## Development Status

- ✅ Core game functionality
- ✅ Chessboard rendering and styling
- ✅ Distance calculation and feedback
- ✅ Game state management
- 🚧 Modal system (placeholder)
- 🚧 Questions feature (placeholder)
- 🚧 Rules dialog functionality

## Contributing

The game is built with vanilla JavaScript for simplicity and educational purposes. Future enhancements could include:

- Rules modal implementation
- Question/hint system
- Difficulty levels with different board sizes
- Score tracking and statistics
- Sound effects and animations

## License

This project is available for educational and personal use.

