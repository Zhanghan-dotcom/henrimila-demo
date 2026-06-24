// 页面顺序数组：固定流转顺序
const pageOrder = [
  "home",
  "intro",
  "empower",
  "craft",
  "product",
  "proDetail",
  "case",
  "caseDetail",
  "news",
  "newsDetail",
  "store",
  "contact"
];
let currentPageIndex = 0;

// 切换指定页面
function show(pageId) {
  const allPages = document.querySelectorAll('.page');
  allPages.forEach(page => page.style.display = 'none');
  document.getElementById(pageId).style.display = 'block';
  window.scrollTo(0, 0);
  // 同步更新当前页码下标
  currentPageIndex = pageOrder.indexOf(pageId);
}

// 顺序切换下一页，最后一页无法点击
function nextPage() {
  if (currentPageIndex >= pageOrder.length - 1) {
    return;
  }
  currentPageIndex++;
  const targetId = pageOrder[currentPageIndex];
  show(targetId);
}