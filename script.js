function createTable() {
  const numRows = parseInt(prompt('Input number of rows'));
  const numColumns = parseInt(prompt('Input number of columns'));

  const table = document.getElementById('myTable');

  // Clear any existing table content
  table.innerHTML = '';

  // Create rows and columns
  for (let i = 0; i < numRows; i++) {
    const row = table.insertRow(i);

    for (let j = 0; j < numColumns; j++) {
      const cell = row.insertCell(j);
      cell.textContent = `Row-${i} Column-${j}`;
    }
  }
}
