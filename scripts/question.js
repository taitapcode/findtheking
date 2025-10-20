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
    prompt:
      'Daniel Kahneman đã chỉ ra bộ não con người qua bao nhiêu hệ thống tư duy?',
    options: ['1', '2', '3', '4'],
    answerIndex: 1,
  },
  {
    prompt: 'Hệ thống 1 của bộ não con người có đặc điểm thế nào?',
    options: [
      'Là hệ thống tư duy nhanh (Fast thinking), hoạt động tự động, trực giác, diễn ra nhanh chóng và không cần nhiều nỗ lực.',
      'Là hệ thống tư duy chậm (Slow thinking), dựa trên lý luận và phân tích kỹ lưỡng.',
      'Là bộ phận xử lý ngôn ngữ giúp con người nói và viết.',
      'Là trung khu điều khiển vận động, giúp thực hiện các hành động thể chất.',
    ],
    answerIndex: 0,
  },
  {
    prompt: 'Chức năng của hệ thống 1 là gì?',
    options: [
      'Ghi nhớ thông tin dài hạn và xử lý ngôn ngữ phức tạp.',
      'Phân tích logic, so sánh dữ liệu và đưa ra quyết định có ý thức.',
      'Nhận biết, phản xạ và đưa ra kết luận dựa trên kinh nghiệm hoặc khuôn mẫu sẵn có. ',
      'Điều khiển các hoạt động thể chất và phối hợp vận động cơ thể.',
    ],
    answerIndex: 2,
  },
  {
    prompt:
      'Khi bạn tránh sang một bên ngay lập tức khi thấy xe máy lao tới, điều này thể hiện hoạt động của:',
    options: ['Hệ thống 1', 'Hệ thống 2'],
    answerIndex: 0,
  },
  {
    prompt:
      'Nhận biết người đối diện đang vui vẻ chỉ qua nét mặt, điều này thể hiện hoạt động của:',
    options: ['Hệ thống 1', 'Hệ thống 2'],
    answerIndex: 0,
  },
  {
    prompt:
      'Có ý thức, logic, chậm rãi và cần có sự tập trung cao là đặc điểm của hệ thống nào?',
    options: ['Hệ thống 1', 'Hệ thống 2'],
    answerIndex: 1,
  },
  {
    prompt: 'Có bao nhiêu chức năng chính của hệ thống 2?',
    options: ['1', '2', '3', '4'],
    answerIndex: 3,
  },
  {
    prompt: 'Ưu điểm của hệ thống 2 gồm những điều nào sau đây?',
    options: [
      'Đưa ra quyết định sai lầm, có cơ sở, giảm sai lầm.',
      'Đưa ra quyết định chính xác, có cơ sở, giảm sai lầm.',
      'Đưa ra quyết định chính xác, có cơ sở, tăng sai lầm.',
      'Đưa ra quyết định chính xác, không có cơ sở, giảm sai lầm.',
    ],
    answerIndex: 1,
  },
  {
    prompt: 'Nhược điểm của hệ thống 2 gồm những điều nào sau đây?',
    options: [
      'Tốn nhiều thời gian.',
      'Dễ gây mệt mỏi.',
      'Không thể áp dụng cho mọi tình huống.',
      'Tất cả các ý trên.',
    ],
    answerIndex: 3,
  },
  {
    prompt: 'Ưu điểm nào sau đây đúng với Hệ thống 1?',
    options: [
      'Tiết kiệm thời gian, đưa ra quyết định có cơ sở và hạn chế sai lầm.',
      'Tiết kiệm thời gian, xử lý tình huống tức thì và phù hợp với phản xạ nhanh. ',
      'Phân tích logic, cân nhắc nhiều lựa chọn trước khi hành động và phù hợp với phản xạ nhanh.',
      'Dựa trên lập luận chặt chẽ, có bằng chứng cụ thể và có thể áp dụng xử lý tình huống tức thì.',
    ],
    answerIndex: 1,
  },
  {
    prompt: 'Nhược điểm nào sau đây đúng với hệ thống 1?',
    options: [
      'Dễ mắc sai lầm do định kiến, ảo tưởng, ảo giác và bị cảm xúc chi phối. ',
      'Tốn nhiều thời gian và năng lượng để đưa ra quyết định.',
      'Khó phản ứng nhanh trong tình huống khẩn cấp.',
      'Không thể hoạt động nếu thiếu dữ liệu và phân tích chi tiết.',
    ],
    answerIndex: 0,
  },
  {
    prompt:
      'Đối với các tình huống như xây dựng chiến lược, đầu tư, ký hợp đồng trong kinh doanh chúng nên áp dụng hệ thống nào?',
    options: [
      'Hệ thống 1: Nhanh chóng và xử lý các tình huống trên kịp thời.',
      'Hệ thống 2: Đánh giá rủi ro và so sánh các phương án phù hợp nhất.',
    ],
    answerIndex: 1,
  },
  {
    prompt: ' Con người thường tin tưởng vào hệ thống 1 vì sao? Vì Hệ thống 1…',
    options: [
      'Giúp con người suy nghĩ logic và có cơ sở dữ liệu chính xác.',
      'Luôn đưa ra quyết định đúng đắn, không bị cảm xúc chi phối.',
      'Thoải mái và nhanh.',
      'Phân tích chậm rãi, cẩn thận trước khi phản ứng.',
    ],
    answerIndex: 2,
  },
  {
    prompt: 'Được cộng 50đ',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Chúc bạn may mắn lần sau (không có điểm lượt này)',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Lựu đạn -40đ. Nhưng không sao! Bạn có thể ném nó cho nhóm khác!',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Biến thành siêu đạo chích và cướp 50% số điểm của người khác',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Chụp locket và nhận 30 điểm',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'X2 số điểm bản thân',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Đạp phải mìn (-30đ)',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Nhường điểm lượt này cho đội khác',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Trừ 30đ',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'BOOOOOMMM!!! Bạn đã bị trừ hết số điểm hiện có!',
    options: ['Pass'],
    answerIndex: 0,
  },
  {
    prompt: 'Có bao nhiêu công cụ tư duy phản biện?',
    options: ['5', '4', '2', '3'],
    answerIndex: 3,
  },
  {
    prompt: 'Công dụng của “Tháp tư duy bậc thang” (Bloom’s taxonomy)?',
    options: [
      'Cả 2 câu C và D đều đúng',
      'Hệ thống hoá mọi nguyên nhân, giúp lập luận trở nên logic và toàn diện',
      'Nâng cấp mức độ câu hỏi và câu trả lời',
      'Xây dựng lập luận theo từng mức độ',
    ],
    answerIndex: 0,
  },
  {
    prompt: 'Công dụng của “5 câu hỏi tại sao” (5 Why)',
    options: [
      'Truy tìm nguyên nhân',
      'Truy tìm nguyên nhân gốc rễ',
      'Truy tìm hung thủ',
      'Truy tìm điểm yếu',
    ],
    answerIndex: 1,
  },
  {
    prompt: 'Công dụng của “Sơ đồ xương cá” (Fishbone Diagram)',
    options: [
      'Hệ thống hoá mọi nguyên nhân giúp lập luận trở nên logic và toàn diện',
      'Để gỡ xương cá',
      'Cả A và D đều đúng',
      'Tìm ra nguyên nhân gốc rễ',
    ],
    answerIndex: 0,
  },
  {
    prompt:
      'Có bao nhiêu bậc trong “Tháp tư duy bậc thang” (Bloom’s taxonomy)?',
    options: ['5', '6', '7', '8'],
    answerIndex: 2,
  },
  {
    prompt: 'Tháp tư duy bậc thang” (Bloom’s taxonomy) bao gồm',
    options: [
      'Sáng tạo, nhớ, phân tích, áp dụng, hiểu, đánh giá',
      'Áp dụng, đánh giá, phân tích, sáng tạo, hiểu, nhớ',
      'Nhớ, hiểu, áp dụng, phân thích, đánh giá, sáng tạo',
      'Nhớ, hiểu, áp dụng, phân tích, đánh giá, sáng tạo',
    ],
    answerIndex: 3,
  },
  {
    prompt:
      '“Tạo ra, lập kế hoạch, sản xuất” là nhiệm vụ của bậc nào trong “Tháp tư duy bậc thang” (Bloom’s taxonomy)?',
    options: ['Phân tích', 'sáng tạo', 'hiểu', 'đánh giá'],
    answerIndex: 1,
  },
  {
    prompt:
      '“Áp dụng” là bậc thứ mấy trong “Tháp tư duy bậc thang” (Bloom’s taxonomy)?',
    options: ['1', '5', '3', '4'],
    answerIndex: 2,
  },
  {
    prompt: '“Sơ đồ xương cá” còn được gọi là?',
    options: [
      'Fishpone Diagram',
      'Fishbone Dlagram',
      'Fishbone Diagram',
      'Fl5HB0N3 D14GR4M',
    ],
    answerIndex: 2,
  },
  {
    prompt: '“5 Why” là phương pháp gì?',
    options: [
      'Trả lời câu hỏi tại sao',
      'Phương pháp đặt 5 câu hỏi tại sao',
      'Phương pháp đặt liên tiếp 5 câu hỏi tại sao',
      'Phương pháp đặt 5 câu hỏi liên tiếp',
    ],
    answerIndex: 2,
  },
  {
    prompt:
      'Bạn thức dậy và nhận ra mình đã bỏ lỡ kỳ thi tiếng Anh đầu vào và không thể đặt lịch thi lại lần nữa. Bạn nên làm gì để giải quyết vấn đề này?',
    options: [
      'Dùng phương pháp “5 Why” để tìm ra nguyên nhân gốc rễ',
      'Đăng story nhạc Miku',
      'Chụp locket',
      'Kệ đi làm ván game',
    ],
    answerIndex: 0,
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
