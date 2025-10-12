const modal = document.querySelector('dialog');
const rulesButton = document.querySelector('.btn-group .btn:nth-child(2)');

function openModal(content) {
  modal.innerHTML = `
    <div class="modal-content">
      <div class="modal-header">
        <h2>Luật Chơi</h2>
        <button class="close-btn" aria-label="Close modal">&times;</button>
      </div>
      <div class="modal-body">
        ${content}
      </div>
    </div>
  `;

  const closeBtn = modal.querySelector('.close-btn');
  closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  modal.showModal();
}

function closeModal() {
  modal.close();
}

function showRules() {
  const rulesContent = `
    <p>Mục tiêu của bạn là tìm ra vua ẩn trên bàn cờ trong vòng 5 lần đoán.</p>

    <h4>Luật chơi:</h4>
    <ul>
      <li>Nhấp vào ô bất kỳ để thực hiện lần đoán đầu tiên và bắt đầu trò chơi</li>
      <li>Số hiển thị cho biết số nước đi tối thiểu mà vua cần để đến ô đó</li>
      <li>Sử dụng các manh mối để thu hẹp vị trí vua đang ẩn</li>
      <li>Bạn có tổng cộng 5 lần đoán để tìm vua</li>
      <li>Tìm được vua (khoảng cách 0) để chiến thắng!</li>
    </ul>

    <h4>Cách di chuyển của Vua:</h4>
    <p>Vua có thể di chuyển một ô theo bất kỳ hướng nào (bao gồm cả đường chéo).</p>
  `;

  openModal(rulesContent);
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal.open) {
    closeModal();
  }
});

rulesButton.addEventListener('click', showRules);
