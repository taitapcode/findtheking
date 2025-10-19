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
    prompt: 'Which chess piece moves in an L-shaped pattern?',
    options: ['Bishop', 'Knight', 'Rook', 'Queen'],
    answerIndex: 1,
  },
  {
    prompt: 'How many squares does a king move in any single turn?',
    options: ['One', 'Two', 'Three', 'Unlimited'],
    answerIndex: 0,
  },
  {
    prompt:
      'What is the term for a position where a king is under direct attack?',
    options: ['Stalemate', 'Fork', 'Check', 'Promotion'],
    answerIndex: 2,
  },
  {
    prompt: 'Which piece starts in the corners of the chessboard?',
    options: ['Queen', 'Bishop', 'Rook', 'Knight'],
    answerIndex: 2,
  },
  {
    prompt: 'How many total squares are on a standard chessboard?',
    options: ['32', '48', '56', '64'],
    answerIndex: 3,
  },
];

const answeredQuestionIndices = new Set();
let hasNotifiedDepleted = false;

function getRandomQuestionIndex() {
  if (answeredQuestionIndices.size === questions.length) return null;

  const availableIndices = [];
  for (let index = 0; index < questions.length; index += 1) {
    if (!answeredQuestionIndices.has(index)) availableIndices.push(index);
  }

  const randomPosition = Math.floor(Math.random() * availableIndices.length);
  return availableIndices[randomPosition];
}

function getRandomQuestion() {
  const index = getRandomQuestionIndex();
  if (index === null) return null;

  return {
    index,
    question: questions[index],
  };
}

function askQuestion() {
  return new Promise((resolve) => {
    const payload = getRandomQuestion();
    if (!payload) {
      if (!hasNotifiedDepleted && typeof openModal === 'function') {
        openModal(
          '<p class="question-text">Bạn đã trả lời hết mọi câu hỏi sẵn có rồi. Hãy tiếp tục truy lùng nhà vua thôi!</p>',
          'Hết câu hỏi',
        );
        hasNotifiedDepleted = true;
      }

      const modal = document.querySelector('.modal');
      if (modal) {
        modal.dataset.locked = 'false';
        setTimeout(() => {
          if (typeof closeModal === 'function') closeModal(true);
          resolve(true);
        }, 1000);
      } else {
        resolve(true);
      }
      return;
    }

    const { index: questionIndex, question } = payload;
    answeredQuestionIndices.add(questionIndex);
    const modal = document.querySelector('.modal');
    const optionsMarkup = question.options
      .map(
        (option, index) => `
          <label class="question-option">
            <input type="radio" name="questionAnswer" value="${index}" required />
            <span>${option}</span>
          </label>
        `,
      )
      .join('');

    const content = `
      <form class="question-form">
        <p class="question-text">${question.prompt}</p>
        <div class="question-options">
          ${optionsMarkup}
        </div>
      </form>
    `;

    if (typeof openModal === 'function') {
      openModal(content, 'Câu hỏi');
    }

    if (modal) {
      modal.dataset.locked = 'true';
      const form = modal.querySelector('.question-form');
      const closeDelay = 1000;

      const handleSelection = (selected) => {
        const selectedInput = form.querySelector(
          `input[name="questionAnswer"][value="${selected}"]`,
        );
        const selectedOption = selectedInput
          ? selectedInput.closest('.question-option')
          : null;
        const correctInput = form.querySelector(
          `input[name="questionAnswer"][value="${question.answerIndex}"]`,
        );
        const correctOption = correctInput
          ? correctInput.closest('.question-option')
          : null;

        form
          .querySelectorAll('input[name="questionAnswer"]')
          .forEach((input) => {
            input.disabled = true;
          });

        const isCorrect = Number(selected) === question.answerIndex;

        if (selectedOption) {
          selectedOption.classList.add(isCorrect ? 'correct' : 'incorrect');
        }
        if (!isCorrect && correctOption) {
          correctOption.classList.add('correct');
        }

        modal.dataset.locked = 'false';
        setTimeout(() => {
          if (typeof closeModal === 'function') closeModal(true);
          resolve(isCorrect);
        }, closeDelay);
      };

      if (form) {
        form
          .querySelectorAll('input[name="questionAnswer"]')
          .forEach((input) => {
            input.addEventListener('change', () => {
              handleSelection(input.value);
            });
          });
      }
    } else {
      resolve(true);
    }
  });
}

window.questionManager = {
  askQuestion,
};
