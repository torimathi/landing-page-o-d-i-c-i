// Footer year
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ===== Hero photo slideshow (1 ảnh/1 lần, đổi mỗi 5s) =====
(function initHeroPhotoSlideshow(){
  const root = document.getElementById("heroPhoto");
  if (!root) return;

  const imgs = Array.from(root.querySelectorAll(".heroPhoto__img"));
  if (imgs.length <= 1) return;

  const interval = Number(root.dataset.interval || 5000);
  let index = imgs.findIndex(i => i.classList.contains("is-active"));
  if (index < 0) index = 0;

  function show(i){
    imgs.forEach((img, idx) => img.classList.toggle("is-active", idx === i));
  }

  show(index);

  setInterval(() => {
    index = (index + 1) % imgs.length;
    show(index);
  }, interval);
})();

// ===== Tabs (mẫu áo) =====
(function initTabs() {
  const tabs = Array.from(document.querySelectorAll(".tab"));
  const panes = Array.from(document.querySelectorAll(".pane"));

  function activate(key) {
    tabs.forEach((t) => t.classList.toggle("is-active", t.dataset.tab === key));
    panes.forEach((p) => p.classList.toggle("is-active", p.dataset.pane === key));
  }

  tabs.forEach((t) => t.addEventListener("click", () => activate(t.dataset.tab)));
})();

// ===== Segmented (sản phẩm có giá) =====
(function initSegmented() {
  const segs = Array.from(document.querySelectorAll(".seg"));
  const pages = Array.from(document.querySelectorAll(".productPage"));
  const prev = document.getElementById("prodPrev");
  const next = document.getElementById("prodNext");

  function show(pageKey) {
    segs.forEach((s) => s.classList.toggle("is-active", s.dataset.seg === pageKey));
    pages.forEach((p) => p.classList.toggle("is-active", p.dataset.page === pageKey));
  }

  segs.forEach((s) => s.addEventListener("click", () => show(s.dataset.seg)));

  function currentKey() {
    const on = segs.find((s) => s.classList.contains("is-active"));
    return on ? on.dataset.seg : "bridePrice";
  }
  function toggle() {
    show(currentKey() === "bridePrice" ? "guestPrice" : "bridePrice");
  }

  if (prev) prev.addEventListener("click", toggle);
  if (next) next.addEventListener("click", toggle);

  show("bridePrice");
})();

// ===== Demo form =====
const form = document.getElementById("leadForm");
const formHint = document.getElementById("formHint");
if (form && formHint) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = data.get("name");
    const phone = data.get("phone");
    formHint.textContent = `Đã nhận thông tin của ${name} (${phone}). Mục này đang demo — chưa gửi đi đâu.`;
    form.reset();
  });
}