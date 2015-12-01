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
      max: 4,
      step: 1,
      slide: function( event, ui ) {
        $("#cf7 img").removeClass("opaque");

        var newImage = ui.value;
        var oldImage = $("#slider").slider("value");
        if (newImage == 4) {
            $("#historical-maps").fadeToggle( "slow", function() {
                $("#modern-maps").css('display','inline');
                $("#container_of_slider").before($("#modern-maps"));
                $("#container_of_slider").css('padding-top', '0px');
                $( "#amount" ).val( "2015 A.D.(Now!)");
                //$("#modern-maps").fadeToggle("slow", "linear");
            });
        } else if (oldImage == 4) {
            $("#modern-maps").css('display', "none");
            $("#modern-maps").before($("#container_of_slider"));
            $("#container_of_slider").css('padding-top', '120px');
            $("#historical-maps").fadeToggle( "slow");
        }
        $("#cf7 img").eq(newImage).addClass("opaque");

        $("#cf7_controls span").removeClass("selected");
        $(this).addClass("selected");
        console.log("This is page " + ui.value);
        
        //This is where we struggled to change descriptions
        $( "" ).hover(
          function() {
            $( this ).append( $( "<span> ***</span>" ) );
          }, function() {
            $( this ).find( "span:last" ).remove();
          }
        );
        $("#desc"+oldImage).hide()
        $("#desc"+newImage).show()
        console.log(oldImage);
        console.log(newImage);        
        
        $( "#amount" ).val( ui.value * 50 + 1800 + "A.D. ");
      }
    });
    $( "#amount" ).val( $( "#slider" ).slider( "value" )  * 50 + 1800  + "A.D. ");
  });

           // L.featureLayer(
           // {
           //     // this feature is in the GeoJSON format: see geojson.org
           //     // for the full specification
           //     type: 'Feature',
           //     geometry: {
           //         type: 'Point',
           //         // coordinates here are in longitude, latitude order because
           //         // x, y is the standard for GeoJSON and many formats
           //         coordinates: [
           //         -39.916721142292,
           //         116.383371603574 
           //         ]
           //     },
           //     properties: {
           //         title: 'Example',
           //         // one can customize markers by adding simplestyle properties
           //         // https://www.mapbox.com/guides/an-open-platform/#simplestyle
           //         'marker-size': 'large',
           //         'marker-color': '#BE9A6B',
           //         'marker-symbol': 'cafe'
           //     }
           // }).addTo(map);
  // With JQuery
// $('#ex1').slider({
//   formatter: function(value) {
//     return 'Current value: ' + value;
//   }
// });
