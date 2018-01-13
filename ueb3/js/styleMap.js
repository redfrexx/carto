

var general = new OpenLayers.StyleMap({
			'default': otherStyle ,			//2 Styles: 1. standard; 2:bei Selektion
			'select': otherselStyle
			});
			
		var otherStyle = new OpenLayers.Style({
		});
		
		general.styles['default'].addRules([	
			
			new OpenLayers.Rule({
				symbolizer: {
					strokeColor: "#000000",
					strokeWidth: 1,
					strokeDashstyle: "solid",
					ZIndex: 1
					}
			})
			]);
		
		var otherselStyle = new OpenLayers.Style({
		});
		
		general.styles['select'].addRules([	
			
			new OpenLayers.Rule({
				symbolizer: {
					strokeColor: "#3399ff",
					strokeWidth: 2.5,
					strokeDashstyle: "solid",
					ZIndex: 2
					}
			})
			]);
	
var bike = new OpenLayers.StyleMap({
			'default': otherStyle ,			
			'select': otherselStyle
			});
			
		var otherStyle = new OpenLayers.Style({
		});
		
		bike.styles['default'].addRules([	
			
			new OpenLayers.Rule({
				symbolizer: {
					strokeColor: "#000000",
					strokeWidth: .5,
					strokeDashstyle: "solid",
					ZIndex: 1
					}
			}),
			
			//reiner Radweg mit Hilfe von Logischen Operatoren aus den OSM Eigenschaften
			new OpenLayers.Rule({
					filter: new OpenLayers.Filter.Logical({
					type: OpenLayers.Filter.Logical.OR,
					filters: [
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.NOT_EQUAL_TO,
                        property: "access",
                        value: "no"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "access",
						value: "destination"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "access",
						value: "unknown"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.NOT_EQUAL_TO,
						property: "access",
						value: "private"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "secondary"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "tertiary"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "secondary_link"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "unclassified"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "tertiary_link"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "residential"
					}),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "cycleway"
                    })]
					})
					,
					symbolizer: {
					strokeColor: "green",
					strokeWidth: 1.0,
					strokeDashstyle: "solid"}
					}),
			
			
			//Fussg‰ngerzone, Fussweg, Autobahnen und Bundesstraﬂen			
			new OpenLayers.Rule({
					filter: new OpenLayers.Filter.Logical({
					type: OpenLayers.Filter.Logical.OR,
					filters: [
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "highway",
                        value: "footway"
                    }),
                   	new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "pedestrian"
                    }),
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "highway",
                        value: "motorway"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "motorway_link"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "trunk"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "trunk_link"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "primary"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "primary_link"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "service"
                    }),
                   	new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "highway",
						value: "steps"
                    })]
					})
					,
					symbolizer: {
					strokeColor: "red",
					strokeWidth: 1.0,
					strokeDashstyle: "solid"}
					})
		]);
				
		
		var otherselStyle = new OpenLayers.Style({
		});
		
		bike.styles['select'].addRules([	
			
			new OpenLayers.Rule({
				symbolizer: {
					strokeColor: "#3399ff",
					strokeWidth: 2.5,
					strokeDashstyle: "solid",
					ZIndex: 2
					}
			})
			]);

	
	
	
var	motorcar = new OpenLayers.StyleMap({
			"default": defaultStyle ,			
			"select": selectStyle
			});
			
			
			var defaultStyle = new OpenLayers.Style({
				symbolizer: {
					strokeColor: "#000000",
					strokeWidth: .5,
					strokeDashstyle: "solid",
					ZIndex: 1
					}
					});
					
			motorcar.styles['default'].addRules([	
			
			new OpenLayers.Rule({
				symbolizer: {
					strokeColor: "#000000",
					strokeWidth: .5,
					strokeDashstyle: "solid",
					ZIndex: 1
					}
			}),
						
			//30er ZONE				
			new OpenLayers.Rule({
					filter: new OpenLayers.Filter.Logical({
					type: OpenLayers.Filter.Logical.AND,
					filters: [
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "access",
                        value: "yes"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.BETWEEN,
						property: "maxspeed",
						lowerBoundary: "0",
						upperBoundary: "30"
                    })]
					})
					,
					symbolizer: {
					strokeColor: "orange",
					strokeWidth: 1.5,
					strokeDashstyle: "solid"}
					}),
				
			//INNERORTS	
			new OpenLayers.Rule({
					filter: new OpenLayers.Filter.Logical({
					type: OpenLayers.Filter.Logical.AND,
					filters: [
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "access",
                        value: "yes"
                    }),
                    new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
						property: "maxspeed",
						value: "50"
                    })]
					})
					,
					symbolizer: {
					strokeColor: "green",
					strokeWidth: 1,
					strokeDashstyle: "solid"}
					}),
									
			//AUSSERORTS				
			new OpenLayers.Rule({	
					filter: new OpenLayers.Filter.Logical({
					type: OpenLayers.Filter.Logical.AND,
					filters: [
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "access",
                        value: "yes"
                    }),
					new OpenLayers.Filter.Comparison({
						type: OpenLayers.Filter.Comparison.BETWEEN,
						property: "maxspeed",
						lowerBoundary: "51",
						upperBoundary: "100",
					})]
					})
					,
					symbolizer: {
					strokeColor: "lightgreen",
					strokeWidth: 1,
					strokeDashstyle: "solid"}
					}),
			
			//AUTOBAHN
			new OpenLayers.Rule({
					filter: new OpenLayers.Filter.Logical({
					type: OpenLayers.Filter.Logical.AND,
					filters: [
					new OpenLayers.Filter.Comparison({
                        type: OpenLayers.Filter.Comparison.EQUAL_TO,
                        property: "access",
                        value: "yes"
                    }),
					new OpenLayers.Filter.Comparison({
						type: OpenLayers.Filter.Comparison.GREATER_THAN_OR_EQUAL_TO,
						property: "maxspeed",
						value: "100",
					}),
					new OpenLayers.Filter.Comparison({
						type: OpenLayers.Filter.Comparison.GREATER_THAN,
						property: "maxweight",
						value:"3.5"
					})]
					}),
					symbolizer: {
					strokeColor: "blue",
					strokeWidth: 1.5,
					strokeDashstyle: "dash"}
					})
			]);
				
		var selectStyle = new OpenLayers.Style({
		})
		;
		motorcar.styles['select'].addRules([	
			
			new OpenLayers.Rule({
				symbolizer: {
					strokeColor: "#3399ff",
					strokeWidth: 2.5,
					strokeDashstyle: "solid",
					ZIndex: 2
					}
			})
			]);