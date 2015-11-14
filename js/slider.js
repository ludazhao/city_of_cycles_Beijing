// $(document).ready(function() {
//   $("#cf7_controls").on('click', 'span', function() {
//     $("#cf7 img").removeClass("opaque");

//     var newImage = $(this).index();
//     console.log(newImage);
//     $("#cf7 img").eq(newImage).addClass("opaque");

//     $("#cf7_controls span").removeClass("selected");
//     $(this).addClass("selected");
//   });
// });

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
      value: 0,
      min: 0,
      max: 3,
      step: 1,
      slide: function( event, ui ) {
        $("#cf7 img").removeClass("opaque");

        var newImage = ui.value;
        console.log(newImage)
        $("#cf7 img").eq(newImage).addClass("opaque");

        $("#cf7_controls span").removeClass("selected");
        $(this).addClass("selected");

        $( "#amount" ).val( ui.value * 100 + 1400 + "A.D. ");
      }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" )  * 100 + 1400  + "A.D. ");
  });

  // With JQuery
// $('#ex1').slider({
//   formatter: function(value) {
//     return 'Current value: ' + value;
//   }
// });