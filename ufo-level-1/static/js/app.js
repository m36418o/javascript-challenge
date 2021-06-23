// from data.js
var tableData = data;

// YOUR CODE HERE!

// Call updateTable() when a click on the filter button takes place
d3.selectAll("#filter-btn").on("click", updateTable);

function updateTable(){
    // Use D3 to select the datetime text field
    var textEntry = d3.select("#datetime");
    
    // Assign the value of the textfield to a variable
    var dateEntered = textEntry.property("value");
    
    // Grabbing the table as a node
    var node = document.getElementById("content");
    
    // Testing dateTime and function
    // console.log(dateEntered);

    // Initialize table by clearing contents within
    node.innerHTML = "";

    // Grabbing data and churn out the table rows
    tableData.forEach((ufo) => {
        // if conditional to check whether the date matches with what user entered
        if (ufo.datetime === dateEntered){
            node.innerHTML += `<tr><td>${ufo.datetime}</td><td>${ufo.city}</td><td>${ufo.state}</td><td>${ufo.country}</td><td>${ufo.shape}</td><td>${ufo.durationMinutes}</td><td>${ufo.comments}</td></tr>`;
            // Testing if conditional
            // console.log(ufo);
        }
    });
};

// Initialize the webpage to populate table upon loading in
function init(){
    var tablebody = document.getElementById("content");
    tableData.forEach((ufo) => {
        tablebody.innerHTML += `<tr><td>${ufo.datetime}</td><td>${ufo.city}</td><td>${ufo.state}</td><td>${ufo.country}</td><td>${ufo.shape}</td><td>${ufo.durationMinutes}</td><td>${ufo.comments}</td></tr>`;
    });  
};

// Calling init() to initialize webpage
init()