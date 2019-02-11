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

  $next = 1;			// fixed, please do not modfy;
  $current = 0;		// fixed, please do not modfy;
  $interval = 3000;	// You can set single picture show time;
  $fadeTime = 1000;	// You can set fadeing-transition time;
  $imgNum = 2;		// How many pictures do you have

  $(document).ready(function(){
      //NOTE : Div Wrapper should with css: relative;
      //NOTE : img should with css: absolute;
      //NOTE : img Width & Height can change by you;
      $('.image').css('position','relative');
    //   $('.image img').css({'position':'absolute','width':'332px','height':'500px'});

      nextFadeIn();
  });

  function nextFadeIn(){
      //make image fade in and fade out at one time, without splash vsual;
      $('.image img').eq($current).delay($interval).fadeOut($fadeTime)
      .end().eq($next).delay($interval).hide().fadeIn($fadeTime, nextFadeIn);
          
      // if You have 5 images, then (eq) range is 0~4 
      // so we should reset to 0 when value > 4; 
      if($next < $imgNum-1){ $next++; } else { $next = 0;}
      if($current < $imgNum-1){ $current++; } else { $current =0; }
  };