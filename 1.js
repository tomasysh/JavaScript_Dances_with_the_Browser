// 任務 1：選取主標題並修改文字
const mainTitle = document.querySelector("#main-title");
if (mainTitle) {
  mainTitle.textContent = "今日推薦商品";
}

// 任務 2：選取描述文字並加上 .highlight 樣式
const desc = document.querySelector(".description");
if (desc) {
  desc.classList.add("highlight");
}

// 任務 3：選取所有商品項目並印出數量
const products = document.querySelectorAll(".product-item");
console.log(`共有 ${products.length} 個商品`);

// 進階操作：為每個商品加上標記 (示範 NodeList.forEach)
products.forEach((item, index) => {
  item.textContent = `[編號 ${index + 1}] ${item.textContent}`;
});
