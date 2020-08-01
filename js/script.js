$(document).ready(function () {

   // webp
   function testWebP(callback) {
      var webP = new Image();
      webP.onload = webP.onerror = function () {
         callback(webP.height == 2);
      };
      webP.src =
         "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
   }

   testWebP(function (support) {
      if (support == true) {
         document.querySelector("body").classList.add("webp");
      }
   });

   //accordion
   $('.accordion__question').on('click', function () {
      $(this).parent().toggleClass('accordion__item--active');
   });

   //slider
   $('.slider').slick({
      slidesToShow: 1,
      infinite: false,
      adaptiveHeight: true

   });

   //aos plugin
   AOS.init({
      disable: false,
      offset: 320, 
      delay: 0, 
      duration: 600,
      once: true
   });

   //smooth scrolling
   const $page = $('html, body');
   $('a[href*="#"]').click(function () {
      $page.animate({
         scrollTop: $($.attr(this, 'href')).offset().top
      }, 400);
      return false;
   });

});