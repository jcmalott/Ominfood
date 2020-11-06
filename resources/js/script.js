$(document).ready(function(){

  $('.--js-header-icon').click(function(){
    const nav = $('.header-links');
    const icon = $('.header-dropdown i')

    nav.slideToggle(200, function(){
      if(icon.hasClass('ion-navicon-round')) nav.css('display', '');
    });

    if(icon.hasClass('ion-navicon-round')) {
      icon.removeClass('ion-navicon-round');
      icon.addClass('ion-close-round');
    } else {
      icon.removeClass('ion-close-round');
      icon.addClass('ion-navicon-round');
    }
  });






  /* Navigation scroll */
  $(function() {
    $('a[href*=#]:not([href=#])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html,body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('.js--section-features').waypoint(function(direction){
    if(direction == 'down') {
      $('nav').addClass('sticky');
    } else {
      $('nav').removeClass('sticky');
    }
  }, {
    offset: '60px;'
  });

  $('.js--wp-1').waypoint(function(){
    $('.js--wp-1').addClass('animate__bounceInUp');
  }, {
    offset: '80%;'
  });

});
