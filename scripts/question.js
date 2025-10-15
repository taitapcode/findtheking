/**
 * @typedef {Object} Question
 * @property {string} question - The question text.
 * @property {string[]} choices - List of possible answers.
 * @property {number} answer - Index of the correct choice in `choices`.
 */

/**
 * An array of quiz questions.
 * @type {Question[]}
 */
const questions = [
  {
    question: 'What is the capital of France?',
    choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 2,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    choices: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 1,
  },
  {
    question: 'What is the largest ocean on Earth?',
    choices: [
      'Atlantic Ocean',
      'Indian Ocean',
      'Arctic Ocean',
      'Pacific Ocean',
    ],
    answer: 3,
  },
  {
    question: 'Who wrote "Hamlet"?',
    choices: [
      'Charles Dickens',
      'William Shakespeare',
      'Mark Twain',
      'Jane Austen',
    ],
    answer: 1,
  },
  {
    question: 'What is the chemical symbol for gold?',
    choices: ['Au', 'Ag', 'Fe', 'Pb'],
    answer: 0,
  },
];
