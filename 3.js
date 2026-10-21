// 任務 1：選取元素
const title = document.querySelector("#page-title");
const name = document.querySelector(".product-name");
const statusText = document.querySelector(".status");
const toggleBtn = document.querySelector("#toggle-style");

// 任務 2：修改內容
if (title && name) {
  title.textContent = "精品咖啡店";
  name.textContent = "衣索比亞 耶加雪菲";
  statusText.textContent = "目前狀態：已更新資料";
}

// 任務 3：樣式操作 (基礎版)
// 先手動加上樣式看看效果
name.classList.add("highlight");

// 進階嘗試：classList.toggle (這會銜接到 Topic 3 的事件處理)
// toggleBtn.addEventListener('click', () => {
//   name.classList.toggle('highlight');
// });
