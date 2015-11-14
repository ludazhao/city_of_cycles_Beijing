$(document).ready(function() {
  $("#cf7_controls").on('click', 'span', function() {
    $("#cf7 img").removeClass("opaque");

    var newImage = $(this).index();

    $("#cf7 img").eq(newImage).addClass("opaque");

    $("#cf7_controls span").removeClass("selected");
    $(this).addClass("selected");
  });
});

// $('#ex1').slider({
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
// });

// // Without JQuery
// var slider = new Slider('#ex1', {
// 	formatter: function(value) {
// 		return 'Current value: ' + value;
// 	}
// });


  $(function() {
    $( "#slider" ).slider({
      value: 100,
      min: 1400,
      max: 2000,
      step: 100,
      slide: function( event, ui ) {
        $( "#amount" ).val( ui.value + "A.D. ");
        
      }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" ) + "A.D. ");
  });

  // With JQuery
// $('#ex1').slider({
//   formatter: function(value) {
//     return 'Current value: ' + value;
//   }
// });