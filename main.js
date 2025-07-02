document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");
  });

  // ページ読み込み時にロゴを表示する
  const logo = document.querySelector(".hero-logo");
  if (logo) {
    logo.classList.add("show");
  }

  // スクロール時にロゴを表示（アニメーション用）
  window.addEventListener("scroll", () => {
    const triggerPoint = window.innerHeight / 1.2;
    const logoTop = logo.getBoundingClientRect().top;
    if (logoTop < triggerPoint) {
      logo.classList.add("show");
    }
  });
});
