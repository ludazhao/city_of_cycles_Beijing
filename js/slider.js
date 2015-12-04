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
      max: 9,
      step: 1,
      slide: function( event, ui ) {
        $("#cf7 img").removeClass("opaque");

        var newImage = ui.value;
        var oldImage = $("#slider").slider("value");
        if (newImage == 9) {
            $("#historical-maps").fadeToggle( "slow", function() {
                $("#modern-maps").css('display','inline');
                $("#container_of_slider").before($("#modern-maps"));
                $("#container_of_slider").css('padding-top', '0px');
                $( "#amount" ).val( "2015 A.D.(Now!)");
                $("#blurb").show();
                //$("#modern-maps").fadeToggle("slow", "linear");
            });
        } else if (oldImage == 9) {
            $("#modern-maps").css('display', "none");
            $("#modern-maps").before($("#container_of_slider"));
            $("#container_of_slider").css('padding-top', '140px');
            $("#historical-maps").fadeToggle( "slow");
            $("#blurb").hide();

        }
        $("#cf7 img").eq(newImage).addClass("opaque");

        $("#cf7_controls span").removeClass("selected");
        $(this).addClass("selected");
        console.log("This is page " + ui.value);
        
        //This is where we struggled to change descriptions

        $("#desc"+oldImage).hide()
        $("#desc"+newImage).show()
        console.log(oldImage);
        console.log(newImage);   


       
        
        if (newImage === 0) {

          $("#amount").val(1300 + " A.D.")}
        else if (newImage === 1){$("#amount").val(1573 + " A.D.")}
        else if (newImage === 2){$("#amount").val(1700 + " A.D.")}
        else if (newImage === 3){$("#amount").val(1861 + " A.D.")}
        else if (newImage === 4){$("#amount").val(1900 + " A.D.")}
        else if (newImage === 5){$("#amount").val(1938 + " A.D.")}
        else if (newImage === 6){$("#amount").val(1952 + " A.D.")}
        else if (newImage === 7){$("#amount").val(1980 + " A.D.")}
        else if (newImage === 8){$("#amount").val(2005 + " A.D.")}
      }
    });
    $( "#amount" ).val( 1300 + " A.D. ");
  });
        //Hovers
        $("#link01").hover(
          function() {
            $("#circle1").show()
          }, function() {
            $("#circle1").hide()
          }
        );      
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
