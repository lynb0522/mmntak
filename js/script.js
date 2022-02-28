$(document).ready(function(){
    $('.slick-slider').slick({
      dots: true ,
    //   autoplay: true,
    //   autoplaySpeed:2000 ,
      prevArrow: $('.btn-prev'),
      nextArrow: $('.btn-next'),
    });
  });

$(document).ready(function(){
  $('.edu-info').click(function(){
    $('.hide-edu-wrap').addClass("active");
  });
});