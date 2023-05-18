const express = require('express');
const app = express();
const port = 3000;

app.use(express.json()); // To parse JSON request bodies

app.get('/', (req, res) => {
  res.send('Hello world!');
});

app.listen(port, () => {
  console.log(`Calculator API listening at http://localhost:${port}`);
});
const MAX_VALUE = 1000000;
const MIN_VALUE = -1000000;

function validateNumbers(num1, num2) {
  if (typeof num1 !== 'number' || typeof num2 !== 'number') {
    return { status: 'error', message: 'Invalid data types' };
  }
  if (num1 < MIN_VALUE || num1 > MAX_VALUE || num2 < MIN_VALUE || num2 > MAX_VALUE) {
    return { status: 'error', message: 'Overflow' };
  }
  return null;
}

app.post('/add', (req, res) => {
  const { num1, num2 } = req.body;
  const validationError = validateNumbers(num1, num2);
  if (validationError) {
    res.json(validationError);
    return;
  }

  const sum = num1 + num2;
  if (sum < MIN_VALUE) {
    res.json({ status: 'error', message: 'Underflow' });
  } else if (sum > MAX_VALUE) {
    res.json({ status: 'error', message: 'Overflow' });
  } else {
    res.json({ status: 'success', message: 'The sum of given two numbers', sum });
  }
});

// Implement the other operations (/sub, /multiply, /divide) similarly










// function createTable() {
//   const numRows = parseInt(prompt('Input number of rows'));
//   const numColumns = parseInt(prompt('Input number of columns'));

//   const table = document.getElementById('myTable');

//   // Clear any existing table content
//   table.innerHTML = '';

//   // Create rows and columns
//   for (let i = 0; i < numRows; i++) {
//     const row = table.insertRow(i);

//     for (let j = 0; j < numColumns; j++) {
//       const cell = row.insertCell(j);
//       cell.textContent = `Row-${i} Column-${j}`;
//     }
//   }
// }
