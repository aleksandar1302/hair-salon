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
$( '.navbar-nav li a' ).on("click", function(){
    $('#hamburger-menu').click();
  });
  