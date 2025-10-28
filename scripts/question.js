/**
 * @typedef {Object} Question
 * @property {string} prompt - The question text.
 * @property {string[]} options - List of possible answers.
 * @property {number} answerIndex - Index of the correct choice in `options`.
 */

/**
 * An array of quiz questions loaded from global variable.
 * @type {Question[]}
 */
let questions = [];

/**
 * Initialize questions from global variable
 */
function initializeQuestions() {
  if (window.QUESTIONS_DATA && Array.isArray(window.QUESTIONS_DATA)) {
    questions = window.QUESTIONS_DATA;
    console.log(`Loaded ${questions.length} questions successfully`);
  } else {
    console.error('Questions data not found');
    questions = [
      {
        prompt: 'Failed to load questions. Please refresh the page.',
        options: ['OK'],
        answerIndex: 0
      }
    ];
  }
}

// Initialize questions when the script loads
initializeQuestions();;

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
