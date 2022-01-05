//Скрол Хедер//
export function scrollHeaderDesc () {
 let header = $('.header');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('header_fixed');
   } else {
    header.removeClass('header_fixed');
   }
 });
};

///скрол моб хед

export function scrollHeaderMob () {
 let header = $('.heder-section');
  
 $(window).scroll(function() {
   if($(this).scrollTop() > 1) {
    header.addClass('heder-sections');
   } else {
    header.removeClass('heder-sections');
   }
 });
};