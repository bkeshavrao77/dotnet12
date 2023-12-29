jQuery(document).ready(function($) {
  //MEGA MENU SCRIPT
  $('.mega-menu-content ul.sb-nav-item.main-tbcat li > a').hover(function(){
    let currentItem = $(this).attr('data-main-ct');
    $('.sb-nav-item.main-tbcat > li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-cat1 ul.sb-nav-item').removeClass('active');
      $('.sub-cat1 ul.sb-nav-item').addClass('hidden');
      $("ul[data-subcat='" + currentItem + "']").removeClass('hidden');
      $("ul[data-subcat='" + currentItem + "']").addClass('active');

      $('.sub-cat2 ul.sb-nav-item').removeClass('active');
      $('.sub-cat2 ul.sb-nav-item').addClass('hidden');

      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
    }
  });

  $('.mega-menu-content .sub-cat1 ul li > a').hover(function(){
    let currentItem = $(this).attr('data-subcat-ct');
    $('.sub-cat1 ul li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-cat2 ul.sb-nav-item').removeClass('active');
      $('.sub-cat2 ul.sb-nav-item').addClass('hidden');
      $("ul[data-sscat='" + currentItem + "']").removeClass('hidden');
      $("ul[data-sscat='" + currentItem + "']").addClass('active');

      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
    }
  });

  $('.mega-menu-content .sub-cat2 ul li > a').hover(function(){
    let currentItem = $(this).attr('data-sfproduct');
    $('.sub-cat2 ul li').removeClass('active');
    $(this).parent().addClass('active');
    if ( currentItem != '' ) {
      $('.sub-product ul.sb-nav-item').removeClass('active');
      $('.sub-product ul.sb-nav-item').addClass('hidden');
      $("ul[data-fproduct='" + currentItem + "']").removeClass('hidden');
      $("ul[data-fproduct='" + currentItem + "']").addClass('active');
    }
  });


});