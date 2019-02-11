$(document).ready(function (){
    $("#oNama").click(function (){
        $('html, body').animate({
            scrollTop: $("#onama").offset().top
        }, 2000);
    });
});
$(document).ready(function (){
    $("#Kontakt").click(function (){
        $('html, body').animate({
            scrollTop: $("#kontakt").offset().top
        }, 2000);
    });
});
$('.navbar-nav li a' ).on("click", function(){
    $('#hamburger-menu').click();
});
  
$(document).ready(function (){
    $("#pocetna").click(function (){
        $('html, body').animate({
            scrollTop: $("#Pocetna").offset().top
        }, 2000);
    });
}); 

$(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });

  $(function(){
      var slides=$('.slideShow>li');
      var slideCount=0;
      var totalSlides=slides.length;
      var slideCache=[];

      (function preloader(){
          if(slideCount<totalSlides){
              slideCache[slideCount]=new Image();
              slideCache[slideCount].src=slides.eq(slideCount).find('img').attr('src');
              slideCache[slideCount].onload=function(){
                  slideCount++;
                  preloader();
              }
          }else{
              slideCount=0;
              slideShow();
          }
      }());

      function slideShow(){
          slides.eq(slideCount).fadeIn(1000).delay(2000).fadeOut(1000, function(){
              slideCount<totalSlides-1 ? slideCount++ : slideCount=0;
              slideShow();
          });
      }
  });