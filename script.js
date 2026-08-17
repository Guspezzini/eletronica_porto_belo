const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
if (menu) {
  menu.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    menu.setAttribute("aria-expanded", String(open));
  });
}
document.querySelectorAll('.main-nav a[href^="#"]').forEach(link => {
  link.addEventListener("click", () => nav.classList.remove("open"));
});
