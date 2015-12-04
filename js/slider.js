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
                $( "#amount" ).val( "2015 A.D.(Now!)");
                $("#blurb").show();
                //$("#modern-maps").fadeToggle("slow", "linear");
            });
        } else if (oldImage == 9) {
            $("#modern-maps").css('display', "none");
            $("#modern-maps").after($("#container_of_slider"));
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
          $("#help").show();
          $("#amount").val(1300 + " A.D.")}
        else if (newImage === 1){$("#amount").val(1573 + " A.D."); $("#help").hide();}
        else if (newImage === 2){$("#amount").val(1700 + " A.D."); }
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

$("#link1").hover(
  function() {
    $("#circle1").show()
  }, function() {
    $("#circle1").hide()
  }
);  

$("#link2").hover(
  function() {
    $("#circle2").show()
  }, function() {
    $("#circle2").hide()
  }
);  

$("#link3").hover(
  function() {
    $("#circle3").show()
  }, function() {
    $("#circle3").hide()
  }
);  

$("#link4").hover(
  function() {
    $("#circle4").show()
  }, function() {
    $("#circle4").hide()
  }
);  

$("#link5").hover(
  function() {
    $("#circle5").show()
  }, function() {
    $("#circle5").hide()
  }
);  

$("#link6").hover(
  function() {
    $("#circle6").show()
  }, function() {
    $("#circle6").hide()
  }
);  

$("#link7").hover(
  function() {
    $("#circle7").show()
  }, function() {
    $("#circle7").hide()
  }
);  

$("#link8").hover(
  function() {
    $("#circle8").show()
  }, function() {
    $("#circle8").hide()
  }
);  

$("#link9").hover(
  function() {
    $("#circle9").show()
  }, function() {
    $("#circle9").hide()
  }
);  

$("#link10").hover(
  function() {
    $("#circle10").show()
  }, function() {
    $("#circle10").hide()
  }
);  

$("#link11").hover(
  function() {
    $("#circle11").show()
  }, function() {
    $("#circle11").hide()
  }
);  

$("#link12").hover(
  function() {
    $("#circle12").show()
  }, function() {
    $("#circle12").hide()
  }
);  

$("#link13").hover(
  function() {
    $("#circle13").show()
  }, function() {
    $("#circle13").hide()
  }
);  

$("#link14").hover(
  function() {
    $("#circle14").show()
  }, function() {
    $("#circle14").hide()
  }
);  

$("#link15").hover(
  function() {
    $("#circle15").show()
  }, function() {
    $("#circle15").hide()
  }
);  

$("#link16").hover(
  function() {
    $("#circle16").show()
  }, function() {
    $("#circle16").hide()
  }
);  

$("#link17").hover(
  function() {
    $("#circle17").show()
  }, function() {
    $("#circle17").hide()
  }
);  

$("#link18").hover(
  function() {
    $("#circle18").show()
  }, function() {
    $("#circle18").hide()
  }
);  

$("#link19").hover(
  function() {
    $("#circle19").show()
  }, function() {
    $("#circle19").hide()
  }
);  


// for (var i =1; i < 20; i++) {
//   $("#link" + toString(i)).hover(
//     function() {
//       $("#circle" + toString(i)).show()
//     }, function() {
//       $("#circle" + toString(i)).hide()
//     }
//   );  
// }    



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
