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
