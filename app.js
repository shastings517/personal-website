$(function(){

  $('#bio').each(function() {
      var letters = $(this).text().split(''),
      $container = $(this).empty();

      $.each(letters, function(_, letter) {
         $('<span>', {text: letter}).appendTo($container);
      });
  });


  function targetRandom(){
    var random = $('span');
    var color = pickColor();
    var myRandomSpan = random[Math.floor(Math.random() * random.length)];
    myRandomSpan.style.color = color;
    // myRandomSpan.attr();

    // myRandomSpan.style.background = rgba(51,56,56,0.6);

    
  }

   function pickColor(){
    var colorArr = ['#FF9B6D','#FFD37C','#EAFD89','#7DBCA9','#57BB7E'];
    var color = colorArr[Math.floor(Math.random()*colorArr.length)];  
    return color;
  }

  function clear(){
    $('span').removeClass();
  }

  function run(){
    var timer = setInterval(function(){
      // var timer2 = setInterval(function(){
        targetRandom(); 
      // },1000);
      // clear();
    },1000);
  }
  run();

  function initialize() {
    var mapCanvas = document.getElementById('map');
    var mapOptions = {
      center: new google.maps.LatLng(37.78, -122.39),
      zoom: 11,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      styles: [ { "stylers":[ {"visibility":"on"},  {"saturation":-100},  {"gamma":0.54}  ] },
                { "featureType":"road", "elementType":"labels.icon",  "stylers":[ {"visibility":"off"}  ] },
                { "featureType":"water",  "stylers":[ {"color":"#4d4946"} ] },
                { "featureType":"poi",  "elementType":"labels.icon",  "stylers":[ {"visibility":"off"}  ] },
                { "featureType":"poi",  "elementType":"labels.text",  "stylers":[ {"visibility":"simplified"} ] },
                { "featureType":"road", "elementType":"geometry.fill",  "stylers":[ {"color":"#ffffff"} ] },
                { "featureType":"road.local", "elementType":"labels.text",  "stylers":[ {"visibility":"simplified"} ] },
                { "featureType":"water",  "elementType":"labels.text.fill", "stylers":[ {"color":"#ffffff"} ] },
                { "featureType":"transit.line", "elementType":"geometry", "stylers":[ {"gamma":0.48}  ] },
                { "featureType":"transit.station",  "elementType":"labels.icon",  "stylers":[ {"visibility":"off"}  ] },
                { "featureType":"road", "elementType":"geometry.stroke",  "stylers":[ {"gamma":7.18}  ] } ]
    };
  var map = new google.maps.Map(mapCanvas, mapOptions);
  }
  google.maps.event.addDomListener(window, 'load', initialize);


  // function targetRandom(){
  //   var randomIndex = Math.floor(Math.random() * (609 - 0))+0;

  //   var str = $('#bio').text()
  // //   var newStr = str.replace(/\s+/g, '');
  // //   console.log(newStr.length)
  // //   console.log(newStr[randomIndex])  
  //   var letter = str[randomIndex]
  //   var newHTML = '"<span class='fuckthis'>" + letter + "</span>"'
  //   str.html(newHTML);
  // }

  // // $(#bio).html(newHTML)

  

  // $('#bio').each(function () {
  //   var original = $(this).text();
  //   var new_version = original.split('').join('<span class="fuckyou"> </span>');
  //   $(this).html(new_version);
  // });

  // function targetGroup(){
  //   $elem = $('#bio');
  //   var chars = jQuery.map($elem.text().split(''), function(c) {
  //     return '<span>' + c + '</span>';
  //   });
  //   // var newStr = $elem.html(chars.join(''));
  //   var randomIndex = Math.floor(Math.random() * (723 - 0))+0;
  //   console.log(chars[randomIndex])
  //   console.log(randomIndex) 
  //   // var str = document.querySelector('#bio').innerHTML;
  //   var color = pickColor();
  //   var letter = chars[randomIndex];
  //   // console.log(newStr, letter, color);
  //   letter.addClass('fuckyou');
  //   // console.log(document.querySelector('#bio')[randomIndex]);
  // }
   

 
  // targetGroup();



  // setTimeout(function(){
  //     targetGroup('#bio'); 
  // },2000);
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
                // var leavingSection = $(this);

                //after leaving section 2
                if(index == 2 && direction =='down' || index == 4 && direction =='up'){
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
                        .style('fill','gray')
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