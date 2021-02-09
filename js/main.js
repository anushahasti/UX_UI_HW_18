let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-navbar-toggle");

navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

$(document).ready(function(){
  $("bounceMe").click(function(){
    $("#myimage").css("color", "red").slideUp(2000);
  });
});




$(function(){
  $('a[href="#comehere]').click(function(e){
    e.preventDefault();
    var targetOffset = $('a[name="comehere"]').offset().top;
    $('htmlbody').animate(
      {scrollTop: targetOffset},
      2000
    );

    
  });
});






