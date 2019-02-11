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
      var slides=$('.slideshow>li');
      var slidecount=0;
      var totalSlides=slides.length;
      var slideCache=[];

      (function preloader(){
          if(slidecount<totalSlides){
              slideCache[slidecount]=new Image();
              slideCache[slidecount].src=slides.eq(slidecount).find('img').attr('src');
              slideCache[slidecount].onload=function(){
                  slidecount++;
                  preloader();
              }
          }else{
              slidecount=0;
              slideShow();
          }
      }());

      function slideShow(){
          slides.eq(slidecount).fadeIn(1000).delay(2000).fadeOut(1000, function(){
              slidecount<totalSlides-1 ? slidecount++ : slidecount=0;
              slideShow();
          });
      }
  });