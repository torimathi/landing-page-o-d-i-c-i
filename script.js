document.getElementById("year").textContent = new Date().getFullYear();

const form = document.getElementById("leadForm");
const hint = document.getElementById("formHint");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const phone = data.get("phone");
  hint.textContent = `Đã nhận thông tin của ${name} (${phone}). Mục này đang demo — chưa gửi đi đâu.`;
  form.reset();
});