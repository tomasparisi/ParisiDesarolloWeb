$(document).ready(function() {
    // Cambiar a modo oscuro
    $('#modo-oscuro').click(function() {
      $('body').removeClass('modo-claro').addClass('modo-oscuro');
    });
  
    // Cambiar a modo claro
    $('#modo-claro').click(function() {
      $('body').removeClass('modo-oscuro').addClass('modo-claro');
    });
  });
  