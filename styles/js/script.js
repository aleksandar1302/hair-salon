var myIndex = 0;
  carousel();
  
function carousel() {
var i;
var x = document.getElementsByClassName("mySlides");
for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
}
    myIndex++;
if (myIndex > x.length) {myIndex = 1}    
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}

$(document).ready(function (){
    $("#oNama").click(function (){
        $('html, body').animate({
            scrollTop: $("#onama").offset().top
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
$(document).ready(function(e){
    $('#sisanjeMeni').click(function(){
        if($('sisanjeMeni').hasClass('hidden')){
            $('sisanjeMeni').removeClass('hidden');
        }
        else{
            $('sisanjeMeni').addClass('hidden');
        }
    });
});

$(".nav li").on("click", function() {
    $(".nav li").removeClass("active");
    $(this).addClass("active");
  });


  
