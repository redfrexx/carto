var motorcar;
var general;
var roads;

function init(){

var map = new OpenLayers.Map ('map',
  {  projection: new OpenLayers.Projection("EPSG:4326"),	// Projection via EPSG Code
	displayProjection: new OpenLayers.Projection("EPSG:3857")	// Anzeige-KOS via EPSG Code
  });

var wms = new OpenLayers.Layer.OSM();
	
	roads = new OpenLayers.Layer.Vector("Straßennetz", {	//laden der GeoJson Datei
        	styleMap: general,						//hierüber werden die unterschiedlichen Visualisierungseinstellungen zugeordnet (siehe styleMap.js)
            rendererOptions: {zIndexing: true},
			strategies: [new OpenLayers.Strategy.BBOX()],
			protocol: new OpenLayers.Protocol.HTTP({
            url: "data/roads.json",
            format: new OpenLayers.Format.GeoJSON()
			})
		});	
		
	roads.events.on({
		featureselected: function(event) {
	    var feature = event.feature;
        var access = feature.attributes.access;
        var name = feature.attributes.name;
        var maxspeed = feature.attributes.maxspeed;
        var maxweight = feature.attributes.maxweight;
        var highway = feature.attributes.highway;
        var id = "Name: " + name + ", \n" + "Zugang: " + access + ",\n" + "erlaubte Geschwindigkeit: " + maxspeed + ",\n" + "Maxmimal Last: " + maxweight + ",\n" + "Widmung: " + highway;
            console.log(feature);
		//var id = "Feature-ID: " + feature.attributes.id;
		document.getElementById("outputid").innerHTML = id;
	}
});

 var center = new OpenLayers.LonLat(6.64,49.755).transform(
        new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
        new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator
      );				//Definition des Zentrums der OpenLayers Map, wird beim Start verwendet
 map.addLayer(wms);												//Variablen wms und roads werden dem Map-Element hinzugefügt
 map.addLayer(roads);
 map.setCenter(center,14);										//Definition des Zentrierens der OpenLayers Map, wird beim Start aufgerufen und mit Zoomstufe 14 angezeigt
 map.addControl(new OpenLayers.Control.LayerSwitcher());		//Definition der Kartenwerkzeuge
 map.addControl(new OpenLayers.Control.NavToolbar);
 var scale_control = new OpenLayers.Control.ScaleLine('scale');
 map.addControl(scale_control);
 
 var external_control = new OpenLayers.Control.MousePosition({
        div: document.getElementById('external_control') });				//externe Anzeige der Mauskoordinaten mittels
 map.addControl(external_control);
 	
 var outputid = new OpenLayers.Control.SelectFeature(roads,
	{
	});
 map.addControl(outputid);
 outputid.activate();
}

function changeStyle(value) {
if (value == 0) {
	roads.styleMap = motorcar;
	roads.redraw();
} else if (value == 1){
	roads.styleMap = general;
	roads.redraw();
} else if (value == 2){
	roads.styleMap = bike;
	roads.redraw();
}
}
