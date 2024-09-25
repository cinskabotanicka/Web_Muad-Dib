// Detekce pozice scrollování pro zobrazení/skrytí názvu stránky v navigaci
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector("header").classList.add("nav-scrolled");
  } else {
    document.querySelector("header").classList.remove("nav-scrolled");
  }
}
