// Column headers
var propertyAddressColumn = "Property Address";
var communityAreaColumn = "Community Area";
var propertyIndexColumn = "Property Index Number";
var taxpayerColumn = "Tax Payer";
var taxpayerMatchCodeColumn = "Taxpayer Match Code";
var affiliatedWithColumn = "Affiliated With";
var additionalDetailsColumn = "Additional Details";
var ownedColumn = "Properties Held by Taxpayer Match Code";
var unitColumn = "Unit Count from Department of Buildings";
var relativeSizeColumn = "Relative Size";

// Database reference
var databaseCollectionName = "features";
// JSON search
var searchIndex = "https://raw.githubusercontent.com/snh-dsa/find-my-landlord/gh-pages/SearchIndex.json"; //Ward 5 Test Search Index
// Map tiles
var tiles = "mapbox://snhdsa.ckfbpgbis1u1225qup0weve7y-9615e" //"https://find-my-landlord.nyc3.cdn.digitaloceanspaces.com/features-08-09-2020-05-48-PM/{z}/{x}/{y}.pbf";

// SNHDSA Mapbox key
mapboxgl.accessToken = "pk.eyJ1Ijoic25oZHNhIiwiYSI6ImNrZTk3cmphMTAxc3Yyc21vOHgyMDF3MmgifQ.Szkc3p1PP4JTZekcIG4MMQ";

// Colors
var dsaRed = "#ec1f27";
var dsaYellow = "#fad434";
var color4 = dsaRed;
var color3 = "#dc7270";
var color2 = "#866b85";
var color1 = "#1e1231";
var black = "#000";
var white = "#fff";
var gray = "#808080";

// Map defaults
var defaultOpacity = .5;
var highlightZoom = 14;

// Change colors based on landlord size
var defaultColors = [
	"case",
	[">=", ["get", ownedColumn], 100],
	color4,
	[">=", ["get", ownedColumn], 10],
	color3,
	[">=", ["get", ownedColumn], 3],
	color2,
	[">", ["get", ownedColumn], 0],
	color1,
	white
];

// Scale radius based on zoom, relative unit size, hover
var defaultRadius = [
	"interpolate",
	["exponential", 1.75],
	["zoom"],
	8, 
	["case",
		["boolean", ["feature-state", "hover"], false],
		["interpolate", ["linear"], ["get", relativeSizeColumn], 0, 10, 100, 20],
		["interpolate", ["linear"], ["get", relativeSizeColumn], 0, 2, 100, 10]
	],
	16, 
	["case",
		["boolean", ["feature-state", "hover"], false],
		["interpolate", ["linear"], ["get", relativeSizeColumn], 0, 12, 100, 24],
		["interpolate", ["linear"], ["get", relativeSizeColumn], 0, 4, 100, 20]
	],
	22, ["case",
		["boolean", ["feature-state", "hover"], false],
		["interpolate", ["linear"], ["get", relativeSizeColumn], 0, 200, 100, 400],
		["interpolate", ["linear"], ["get", relativeSizeColumn], 0, 180, 100, 900]
	]
];

// Custom UI
var selectedBounds = null;
var markerContainer = null;
var marker = null;
var spinner = document.getElementById("spinner");
var searchInputContainer = document.getElementById("search-input-container");
var searchInput = document.getElementById("search-input");
var clearButton = document.getElementById("clear");
var searchResultsContainer = document.getElementById("search-results-container");
var searchResultsCounter = document.getElementById("search-results-counter");
var searchResultsList = document.getElementById("search-results-list");
var selectedContainer = document.getElementById("selected-container");
