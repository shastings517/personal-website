$(function(){
  // $(window).scroll(function() {
  // if ($(this).scrollTop() > 1){  
  //     $('nav').addClass("sticky");
  //   }
  //   else{
  //     $('nav').removeClass("sticky");
  //   }
  // });

  
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
    anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
    menu: '#menu',
    onLeave: function(index, nextIndex, direction){
                var leavingSection = $(this);

                //after leaving section 2
                if(index == 2 && direction =='down' || index == 4 && direction == 'up'){
                    // alert("Going to section 3!");
                  $('[data-bar-chart]').each(function (i, svg) {
                    var $svg = $(svg);
                    var data = $svg.data('data').split(',').map(function (datum) {
                      return parseFloat(datum);
                    });

                    var barWidth = parseFloat($svg.data('bar-width')) || 15;
                    var barSpace = parseFloat($svg.data('bar-space')) || 8;
                    var chartHeight = $svg.outerHeight();

                    var y = d3.scale.linear()
                              .domain([0, d3.max(data)])
                              .range([0, chartHeight]);

                    d3.select(svg)
                      .selectAll("rect")
                        .data(data)
                      .enter().append("rect")
                        .attr("class", "bar")
                        .attr("width", barWidth)
                        .attr("x", function (d, i) { return barWidth*i + barSpace*i; })
                        .attr("y", chartHeight)
                        .attr("height", 0)
                        .transition()
                        .delay(function (d, i) { return i*100; })
                        .attr("y", function (d, i) { return chartHeight-y(d); })
                        .attr("height", function (d) { return y(d); });
                  });


                }
                // if(index == 3 && direction =='down' || index == 3 && direction == 'up'){
                //   $('[data-bar-chart]').each(function (i, svg) {
                //     var $svg = $(svg);
                //     var data = $svg.data('data').split(',').map(function (datum) {
                //       return parseFloat(datum);
                //     });

                //     var barWidth = parseFloat($svg.data('bar-width')) || 15;
                //     var barSpace = parseFloat($svg.data('bar-space')) || 3;
                //     var chartHeight = $svg.outerHeight();

                //     var y = d3.scale.linear()
                //               .domain([0, d3.max(data)])
                //               .range([0, chartHeight]);

                //     d3.select(svg)
                //       .selectAll("rect")
                //         .data(data)
                //       .enter().append("rect")
                //         .attr("class", "bar")
                //         .attr("width", barWidth)
                //         .attr("x", function (d, i) { return barWidth*i + barSpace*i; })
                //         .attr("y", chartHeight)
                //         .attr("height", 0);
                // });              
                // }
                
            }
    // afterRender: function(anchorLink, index){

      //section 2
      // if(anchorLink == 'fourthPage'){
        



      // }
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
      // }
    // });
  // $('[data-bar-chart]').each(function (i, svg) {
  //   var $svg = $(svg);
  //   var data = $svg.data('data').split(',').map(function (datum) {
  //     return parseFloat(datum);
  //   });

  //   var barWidth = parseFloat($svg.data('bar-width')) || 15;
  //   var barSpace = parseFloat($svg.data('bar-space')) || 3;
  //   var chartHeight = $svg.outerHeight();

  //   var y = d3.scale.linear()
  //             .domain([0, d3.max(data)])
  //             .range([0, chartHeight]);

  //   d3.select(svg)
  //     .selectAll("rect")
  //       .data(data)
  //     .enter().append("rect")
  //       .attr("class", "bar")
  //       .attr("width", barWidth)
  //       .attr("x", function (d, i) { return barWidth*i + barSpace*i; })
  //       .attr("y", chartHeight)
  //       .attr("height", 0)
  //       .transition()
  //       .delay(function (d, i) { return i*100; })
  //       .attr("y", function (d, i) { return chartHeight-y(d); })
  //       .attr("height", function (d) { return y(d); });
  // });


});

});