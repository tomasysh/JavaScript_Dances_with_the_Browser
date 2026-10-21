// 1. 選取按鈕
const cartBtn = document.querySelector('.add-to-cart-btn');

// 2. 模擬點擊事件（詳細事件監聽將在 Unit 3 深入討論）
cartBtn.addEventListener('click', function() {
  // --- 修改內容 ---
  const originalText = cartBtn.textContent;
  cartBtn.textContent = '✅ 已加入';

  // --- 修改樣式 ---
  // 我們在 CSS 中預設好了 .btn-success 這個類別
  cartBtn.classList.add('btn-success');

  // --- 延遲恢復 (保持良好的使用者體驗) ---
  setTimeout(() => {
    cartBtn.textContent = originalText;
    cartBtn.classList.remove('btn-success');
  }, 2000);
});
