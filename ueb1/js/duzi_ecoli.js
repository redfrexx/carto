var path, karte;

var ecoli=ecoli;
var river=river;
var roads=roads;
var urban=urban;

var height= 500;
var width = 800;
var fullwidth = 1250 ;

var radius = 5;
var padding = 50;


// Create a unit projection.
var projection = d3.geo.mercator()
    .scale(1)
    .translate([0, 0]);

// Create a path generator.
var path = d3.geo.path()
    .projection(projection);
console.log(path);

// Compute the bounds of a feature of interest, then derive scale & translate.
var b = path.bounds(ecoli),
    s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
    t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

// Update the projection to use computed scale & translate.
projection
    .scale(s)
    .translate(t);
    
var karte = d3.select("#karte").append("svg")
								.attr("id","karte")
								.attr("width", width)
								.attr("height", height);
karte.append("rect")
	.attr("id", "rect")
	.attr("class", "background")
	.attr("width", width)
	.attr("height", height);

var fillScale = d3.scale.linear()
	.domain([0,100000])
	.range(["green", "red"])
				
var lay_urban = karte.append("g")
				.attr("id", "lay_urban")
				.append("g")
				.attr("id","urban")
				.selectAll("line")
					.data(urban.features)
					.enter().append("path")
					.attr("d",path)
					.attr("fill", "lightyellow")
					.attr("stroke", "lightyellow");

var lay_roads = karte.append("g")
				.attr("id", "lay_roads")
				.append("g")
				.attr("id","roads")
				.selectAll("line")
					.data(roads.features)
					.enter().append("path")
					.attr("d",path)
					.attr("fill", "None")
					.attr("stroke", "black");
													
var lay_ecoli = karte.append("g")
				.attr("id", "lay_ecoli")
				.append("g")
				.attr("id","rivers")
				.selectAll("line")
					.data(river.features)
					.enter().append("path")
					.attr("d",path)
					.attr("fill", "None")
					.attr("stroke", "blue");
		


d3.select("#slider").call(d3.slider().axis(true).min(1).max(10).step(1)
						.on("slide", ActivateLayer));


function ActivateLayer(evt,value) {

	if (value==1) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu10) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==2) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu11) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==3) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu13) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==4) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu14) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==5) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu15) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==6) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu16) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==7) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu17) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==8) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu18) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	} 
	else if (value==9) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu9) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
	else if (value==10) {
		d3.select("#ecoli").remove("#ecoli");
		var point = d3.select("#lay_ecoli")
					.append("g")
					.attr("id", "ecoli")
					.selectAll("circle")
						.data(ecoli.features)
						.enter().append("circle")
						.attr("cx", function(d) { 	
										return projection(d.geometry.coordinates)[0]} )
						.attr("cy", function(d) { 
										var xy = projection(d.geometry.coordinates); //alternative
										return xy[1] } )
						.attr("fill", function(d) {
										return fillScale(d.properties.DuziResu10) })
						.attr("r", radius)
						//.on("click", showChart ); // Element das angeklickt wurde wird vom Browser automatisch übergeben = elem
	}
}