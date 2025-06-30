// ページ読み込み後にスクロールイベントを追加
window.addEventListener("scroll", () => {
  const logo = document.querySelector(".hero-logo");
  const triggerPoint = window.innerHeight / 1.2;

  if (logo) {
    const logoTop = logo.getBoundingClientRect().top;
    if (logoTop < triggerPoint) {
      logo.classList.add("show");
    }
  }
});


window.addEventListener("load", () => {
  document.querySelector('.hero-logo').classList.add('show');
});

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });
});
