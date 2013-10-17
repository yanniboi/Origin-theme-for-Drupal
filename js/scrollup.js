jQuery(document).ready(function(){
  //Scroll Top
    jQuery('.scrollup').hide();
    jQuery(window).scroll(function(){
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.scrollup').fadeIn(500, function() {
        jQuery(this).addClass('transition');
      });
    } else {
      jQuery('.scrollup').fadeOut().removeClass('transition');
    }
  }); 
  jQuery('.scrollup').click(function(){
    jQuery("html, body").animate({ scrollTop: 0 }, 800);
  });
});
