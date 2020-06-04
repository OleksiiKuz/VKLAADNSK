$(function () {
   $('.question__title').click(function (j) {

      var dropDown = $(this).closest('.question__item').find('.question__text');
      $(this).closest('.acc').find('.acc__panel').not(dropDown).slideUp();

      if ($(this).hasClass('active')) {
         $(this).removeClass('active');
      } else {
         $(this).closest('.acc').find('.question__title.active').removeClass('active');
         $(this).addClass('active');
      }

      dropDown.stop(false, true).slideToggle();
      j.preventDefault();
   });


});
// Вызов модального окна
$('.popup-link').click(function () {
   $('#popup').fadeIn();
});

// Закрытие окна на крестик
$('.close-popup').click(function () {
   $('#popup').fadeOut();
   
});

// Закрытие окна на поле
$(document).mouseup(function (e) {
   var popup = $('.popup__content');
   if (e.target != popup[0] && popup.has(e.target).length === 0) {
      $('.popup').fadeOut();
   }
});

// Вызов модального окна
$('.popup__button').click(function () {
   $('.done').fadeIn();
});



// Закрытие окна на крестик
$('.done-close').click(function () {
   $('.done').fadeOut();
});