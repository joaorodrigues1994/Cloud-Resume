// script.js
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("btnTop").style.display = "block";
  } else {
    document.getElementById("btnTop").style.display = "none";
  }
}

function topFunction() {
  const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop); // Obtém a posição atual do scroll
  if (scrollTop > 0) {
    window.requestAnimationFrame(topFunction); // Cria a animação
    window.scrollTo(0, scrollTop - scrollTop / 8); // Move a página para cima suavemente
  }
}