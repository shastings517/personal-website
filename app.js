$(function(){
  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('nav').addClass("sticky");
    }
    else{
      $('nav').removeClass("sticky");
    }
  });

  // $("#name").hide();
  // setTimeout(function(){
  //     $("#name").fadeIn( 3000); 
  // }, 2500);


  $('#fullpage').fullpage({
    verticalCentered: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    afterLoad: function(anchorLink, index){

      //section 2
      if(anchorLink == 'firstPage'){
        //moving the image
        $('#section1').find('#nomad').delay(500).animate({
          left: '-8%'
        }, 1500, 'easeInOutCubic');

        $('#section1').find('#name').delay(500).animate({
          right: '-50%'
        }, 1500, 'easeInOutCubic');
      }

      //   $('#section1').find('p').first().fadeIn(1800, function(){
      //     $('#section1').find('p').last().fadeIn(1800);
      //   });;

      // }

      // //section 3
      // if(anchorLink == '3rdPage'){
      //   //moving the image
      //   $('#section2').find('.intro').delay(500).animate({
      //     left: '0%'
      //   }, 1500, 'easeOutExpo');
      }
    });




});