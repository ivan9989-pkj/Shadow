// document.addEventListener('DOMContentLoaded', function () {
//     const ctaButton = document.getElementById('cta-button');
//     const ctaMessage = document.getElementById('cta-message');
  
//     ctaButton.addEventListener('click', function () {
//       ctaMessage.classList.remove('hidden');
//       ctaMessage.classList.add('show-message');
  
//       setTimeout(function () {
//         ctaMessage.classList.remove('show-message');
//         ctaMessage.classList.add('hidden');
//       }, 3000); // Oculta el mensaje después de 3 segundos
//     });
//   });

$(document).ready(function() {
  $('#cta-button').click(function() {
      $('#cta-message').removeClass('hidden').addClass('show-message');

      setTimeout(function() {
          $('#cta-message').removeClass('show-message').addClass('hidden');
      }, 3000); // Oculta el mensaje después de 3 segundos
  });
});
  