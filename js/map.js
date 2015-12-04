L.mapbox.accessToken = 'pk.eyJ1IjoibHVkYXpoYW8iLCJhIjoiY2loa3h6NWFpMDZrN3Rqajc0eWQ0NnUxZyJ9.80Gv5oagHmAae16mm2E00w';
// Create a map in the div #map
var map = L.mapbox.map('map', 'ludazhao.oa0l9b1f');

map.setView([39.9167, 116.3833], 11);

var popupContent = "<p> Here is Wudaokou! </p><iframe width='560' height='315' src='https://www.youtube.com/embed/rQ8Wb7IRNgA' frameborder='0' allowfullscreen></iframe>";

map.featureLayer.on('ready', function(e) {
	map.featureLayer.eachLayer(function(marker) {
	        if (marker.feature.properties.title === 'Wudaokou') {
	            marker.bindPopup(popupContent,{
	                minWidth: 580
	            });
	        }
	    });
});

$('#add_button').click(function(e) {
	e.stopPropagation();
    $(this).toggleClass('btn-danger');
    $(this).toggleClass('active');
    $(this).toggleClass('btn-primary');
    $("#add_form_background").toggle();
    $(this).html() == "Add New Pins" ? $(this).html('Click on Map to Save') : $(this).html('Add New Pins');
})

$('add_form_background').click(function(e) {
    e.stopPropagation();
})

//When the map is clicked, add the new pin
map.on('click', function(e) {
	if ($('#add_button').hasClass('active')) {
		var lat = e.latlng.lat;
		var lng = e.latlng.lng;
		L.mapbox.featureLayer({
		    // this feature is in the GeoJSON format: see geojson.org
		    // for the full specification
		    type: 'Feature',
		    geometry: {
		        type: 'Point',
		        // coordinates here are in longitude, latitude order because
		        // x, y is the standard for GeoJSON and many formats
		        coordinates: [
		          lng,
		          lat 
		        ]
		    },
		    properties: {
		        title: $("#form_title").val(),
		        description: $("#form_desc").val() + "<img src='" + $('#blah').attr('src') + "'/>",
                "marker-color":"#0099ff"
		    }
		}).addTo(map);
   	}
});

function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#blah').attr('src', e.target.result);
        }
        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});

