// Get references to the tbody element, 5 input fields and 2 buttons
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state");
var $cityInput = document.querySelector("#city");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

// Add an event listener to the searchButton, call searchButtonClick function when clicked
$searchBtn.addEventListener("click", searchButtonClick);

// Add an event listener to the resetButton, call resetButtonClick function when clicked
$resetBtn.addEventListener("click", resetButtonClick);

// Create a copy of the data
var tableData = data;

// Build table with non-filtered data
function populateTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < tableData.length; i++) {
    // Get current sighting object and fields
    var sighting = tableData[i];
    console.log(sighting)
    var fields = Object.keys(sighting);
    // Create new row in tbody, set index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      // For each field in sighting object, create new cell and set inner text to be current value at current sighting field
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

// Build search table for filtered data
function searchButtonClick() {
  var dateFilter = $dateInput.value;
  var stateFilter = $stateInput.value.trim().toLowerCase();
  var cityFilter = $cityInput.value.trim().toLowerCase();
  var countryFilter = $countryInput.value.trim().toLowerCase();
  var shapeFilter = $shapeInput.value.trim().toLowerCase();

  // Date Filter
  if (dateFilter != "") {
    tableData = data.filter(function (sighting) {
      var sightingDate = sighting.datetime;
      return sightingDate === dateFilter;
    });
  }
  else { tableData };

  // State Filter
  if (stateFilter != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingState = sighting.state;
      return sightingState === stateFilter;
    });
  }
  else { tableData };

  // City Filter
  if (cityFilter != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingCity = sighting.city;
      return sightingCity === cityFilter;
    });
  }
  else { tableData };

  // Country Filter
  if (countryFilter != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingCountry = sighting.country;
      return sightingCountry === countryFilter;
    });
  }
  else { tableData };

  // Shape Filter
  if (shapeFilter != "") {
    tableData = tableData.filter(function (sighting) {
      var sightingShape = sighting.shape;
      return sightingShape === shapeFilter;
    });
  }
  else { tableData };

  populateTable();
}

// Clear all search fields and reset table
function resetButtonClick(){
  populateTable();
}

// Populate table for first time on page load
populateTable();