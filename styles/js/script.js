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
$(document).ready(function() {
$('.image').cycle({
	fx: 'fade' // choose your transition type, ex: fade, scrollUp, shuffle, etc...
	});
});