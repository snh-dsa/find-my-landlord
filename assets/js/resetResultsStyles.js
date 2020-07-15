function resetSearchResults() {
	// Hide container
	searchResultsContainer.style.display = "none";
	// Hide counter
	searchResultsCounter.style.display = "none";

	// Clear counter and list HTML
	searchResultsCounter.innerHTML = "";
	searchResultsList.innerHTML = "";

	var noResults = document.getElementById("no-results-container");

	if (noResults) {
		// Remove no results message
		noResults.parentNode.removeChild(noResults);
	};
};

function resetPointStyles(feature) {
	var selectedContainer = document.getElementById("selected-container");

	if (selectedContainer) {
		// Remove selected building
		selectedContainer.parentNode.removeChild(selectedContainer);
	};
	
	if (markerContainer) {
		// Remove marker
		markerContainer.parentNode.removeChild(markerContainer);
		markerContainer = null;
	};

	// Restore layer with complete dataset
	map.setLayoutProperty("propertyData", "visibility", "visible");

	// Remove selected layers
	if (map.getLayer("selectedPoint")) {
		map.removeLayer("selectedPoint");
		map.removeSource("selectedPoint");
	};
	if (map.getLayer("relatedPoints")) {
		map.removeLayer("relatedPoints");
		map.removeSource("relatedPoints");
	};
	if (map.getLayer("otherPoints")) {
		map.removeLayer("otherPoints");
		map.removeSource("otherPoints");
	};
};
