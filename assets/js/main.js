$(document).ready(function() {
    $('#cnpj').inputmask('99.999.999/9999-99', {
      placeholder: '__.___.___/____-__',
      clearIncomplete: true
    });
    
    $('#telefone').inputmask('(99) 9999-9999[9]', {
      placeholder: '(__) ____-____',
      clearIncomplete: true,
      greedy: false
    });
});

AOS.init({
    once: true
  });

const preloaderTimeout = 10;
window.onload = function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.querySelector(".content").style.display = "block";
    }, preloaderTimeout);
};

