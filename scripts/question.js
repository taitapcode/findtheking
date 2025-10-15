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

function getRandomQuestion() {
  return questions[Math.floor(Math.random() * questions.length)];
}

function askQuestion() {
  return new Promise((resolve) => {
    const question = getRandomQuestion();
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
        <button type="submit" class="btn submit-answer">Xác nhận</button>
        <p class="question-feedback" aria-live="polite"></p>
      </form>
    `;

    if (typeof openModal === 'function') {
      openModal(content, 'Câu hỏi');
    }

    if (modal) {
      modal.dataset.locked = 'true';
      const form = modal.querySelector('.question-form');
      const feedback = modal.querySelector('.question-feedback');

      if (form) {
        form.addEventListener('submit', (event) => {
          event.preventDefault();
          const data = new FormData(form);
          const selected = data.get('questionAnswer');

          if (selected === null) {
            feedback.textContent = 'Hãy chọn đáp án';
            return;
          }

          if (Number(selected) === question.answerIndex) {
            feedback.textContent = 'Chính xác! Hãy tiếp tục săn tìm vua nào';
            feedback.classList.remove('error');
            modal.dataset.locked = 'false';
            setTimeout(() => {
              if (typeof closeModal === 'function') closeModal(true);
              resolve(true);
            }, 400);
          } else {
            feedback.textContent = 'Chưa chuẩn lắm. Thử lại nào';
            feedback.classList.add('error');
          }
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
