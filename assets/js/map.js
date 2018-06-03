function myMap() {
	var mapCanvas = document.getElementById("map");
	var mapOptions = {
		center: new google.maps.LatLng(-36.7670542, 174.6963872), 
		zoom: 13,
		zoomControl: false,
		scaleControl: false,
		scrollwheel: false,
		disableDoubleClickZoom: true,
		styles: [
  {
    "stylers": [
      { "hue": "#00eeff" },
      { "invert_lightness": true }
    ]
  },{
    "featureType": "road",
    "stylers": [
      { "hue": "#ff6e00" },
      { "gamma": 2 },
      { "lightness": -11 }
    ]
  },{
    "featureType": "water",
    "stylers": [
      { "hue": "#0099ff" },
      { "saturation": 100 },
      { "lightness": -83 },
      { "gamma": 1.96 }
    ]
  }
]
	}
	var map = new google.maps.Map(mapCanvas, mapOptions);
}