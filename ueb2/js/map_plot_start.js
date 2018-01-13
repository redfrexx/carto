var path, map;

var geodata=json;

var height= 500;
var width = 800;
var fullwidth = 1250 ;

var radius = 3;
var padding = 50;

var hiLight;

// Create a unit projection.
var projection = d3.geo.mercator()
	.scale(1)
	.translate([0, 0]);

// Create a path generator.
var path = d3.geo.path()
	.projection(projection);
console.log(path);

// Compute the bounds of a feature of interest, then derive scale & translate.
var b = path.bounds(geodata),
	s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
	t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

// Update the projection to use computed scale & translate.
projection
	.scale(s)
	.translate(t);
	
var map = d3.select("#map").append("svg").attr("id","map").attr("width", width).attr("height", height);
map.append("rect")
	.attr("id", "rect")
	.attr("class", "background")
	.attr("width", width)
	.attr("height", height);

var lay = map.append("g")
				.attr("id", "lay")
				.append("g")
				.attr("id","kreise")
				.selectAll("path")
					.data(geodata.features)
					.enter().append("path")
					.attr("d",path)
					.attr("fill", "grey");

var point = d3.select("#lay")
					.append("g")
					.attr("id", "NS_RLP")
					.attr("fill", "darkred")
					.attr("stroke", "black")
					.selectAll("circle")
						.data(jsonRain.features)
						.enter().append("circle")
						.attr("class", "stationen")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("r", radius)
						.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
						

/*function showChartTest(elem) {
	alert("Station: " + elem.properties.Station)
}
*/

var chart = d3.select("#map").append("svg").attr("id", "chart")
					.attr("width", fullwidth-width)
					.attr("height", height);
					
function buildChart(dataset, width, height) {
	var xScale = d3.scale.linear()
			.domain([0, dataset.length])
			.range([padding, width-padding]);
	var yScale = d3.scale.linear()
			.domain([0, d3.max(dataset)])
			.range([height-padding, padding])
			
	chart.append("g").attr("id", "plot")
		.selectAll("circle")
			.data(dataset)
			.enter().append("circle")
			.attr("class", "values")
			.attr("cx", function(d,i) 	{ return xScale(i+1) } )
			.attr("cy", function(d) 	{ return yScale(d) 	 } )
			.attr("r", radius)
			
	var xAxis = d3.svg.axis()
					.scale(xScale)
					.orient("bottom")
					.ticks(dataset.length);
					
	var yAxis = d3.svg.axis()
					.scale(yScale)
					.orient("left")
					.ticks(10);
					
	chart.select("#plot").append("g").attr("class", "axis")
			.attr("transform", "translate(0," + (height-padding) + ")" )
			.call(xAxis);

	chart.select("#plot").append("g").attr("class", "axis")
			.attr("transform", "translate(" + padding + ", 0)" )
			.call(yAxis);	
	
	// Beschriftung der Punkte
	chart.select("#plot").append("g").attr("id", "label")
		.selectAll("text")
			.data(dataset)
			.enter().append("text")
				.attr("class","charttext")
				.text(function(d) { return d; })
				.attr("x", function (d,i) { return xScale(i+1) - 2 * radius; 	})
				.attr("y", function (d,i) { return yScale(d) - 2 * radius; 		});
				
	// Jahresmittelwert
	sum=0;
	sum= d3.sum(dataset);
	mean = sum / dataset.length;
	mean = Math.round(mean*10)/10;
	console.log(mean);
	
	chart.select("#plot")
		.append("line")
			.attr("class", "average")
			.attr("x1", xScale(0))
			.attr("x2", xScale(dataset.length))
			.attr("y1", yScale(mean))
			.attr("y2", yScale(mean));
	}

function showChart(d, i) {
	domElem = this; // domElem = Element, das event ausgelöst hat
	elem = d;
	
	if (hiLight != undefined) {
		d3.select(hiLight).style("fill", "steelblue");
	}
	d3.select(domElem).style("fill", "orange");
	
	hiLight = domElem;
	
	prop = elem.properties;
	dataset = [	prop.Januar, prop.Februar, prop.Maerz, prop.April, prop.Mai, 
				prop.Juni, prop.Juli, prop.August, prop.September, prop.Oktober, 
				prop.November, prop.Dezember];
	d3.select("#plot").remove("#plot");
	var width = d3.select("#chart").attr("width");
	var height = d3.select("#chart").attr("height");
	buildChart(dataset, width, height);
}

/* HA: 	Werte als Textelement hinzufügen 
		Jahresmittel einzeichnen
*/