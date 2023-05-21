function createTable() {
  // Prompt for the number of rows
  const numRows = parseInt(prompt("Input number of rows"));

  // Prompt for the number of columns
  const numColumns = parseInt(prompt("Input number of columns"));

  // Get the table element
  const table = document.getElementById("myTable");

  // Clear any existing table content
  table.innerHTML = "";

  // Create the table rows and columns
  for (let i = 0; i < numRows; i++) {
    const row = document.createElement("tr");

    for (let j = 0; j < numColumns; j++) {
      const cell = document.createElement("td");
      cell.textContent = `Row-${i} Column-${j}`;
      row.appendChild(cell);
    }

    table.appendChild(row);
  }
}
