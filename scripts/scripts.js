// script.js
let isScrolling = false;
let lastScrollTop = 0;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  if (isScrolling && scrollTop > lastScrollTop) {
    isScrolling = false;
  }
  if (scrollTop > 20) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
  lastScrollTop = scrollTop;
}

function topFunction() {
  if (isScrolling) return;
  isScrolling = true;
  lastScrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
  const scroll = () => {
    const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
    if (scrollTop > 0 && isScrolling) {
      window.scrollTo(0, scrollTop - scrollTop / 8);
      requestAnimationFrame(scroll);
    } else {
      isScrolling = false;
    }
  };
  scroll();
}