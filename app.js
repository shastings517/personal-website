$(function(){
  $(window).scroll(function() {
  if ($(this).scrollTop() > 1){  
      $('nav').addClass("sticky");
    }
    else{
      $('nav').removeClass("sticky");
    }
  });

  
  // $('#fullpage').fullpage({
    //     onLeave: function(index, nextIndex, direction){
    //         var leavingSection = $(this);

    //         //after leaving section 2
    //         if(index == 1 && direction =='down'){
    //             alert("Going to section 3!");
    //         }

    //         else if(index == 2 && direction == 'up'){
    //             alert("Going to section 1!");
    //         }
    //     }
    // });

// FULLPAGE CONTROLLER
  $('#fullpage').fullpage({
    verticalCentered: true,
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage'],
    menu: '#menu',
    afterLoad: function(anchorLink, index){

      //section 2
      // if(anchorLink == 'firstPage'){
      //   //moving the image
      //   $('#section1').find('#nomad').delay(1000).animate({
      //     left: '-8%'
      //   }, 3000, 'linear');

      //   $('#section1').find('#name').delay(1000).animate({
      //     right: '-50%'
      //   }, 3000, 'linear');
      // }

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