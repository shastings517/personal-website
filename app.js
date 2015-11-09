$(function(){
  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('nav').addClass("sticky");
    }
    else{
      $('nav').removeClass("sticky");
    }
  });

  $("#name").hide();
  setTimeout(function(){
      $("#name").fadeIn( 3000); 
  }, 2500);


  $('#fullpage').fullpage({
    verticalCentered: true,
  });



});