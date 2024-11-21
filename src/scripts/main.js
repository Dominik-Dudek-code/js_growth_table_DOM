'use strict';

// write code here

const table = document.querySelector('.field > tbody');
const buttons = document.querySelector('.container');

function modifyColumns(rezising) {
  switch (rezising) {
    case 'append-row':
      table.appendChild(table.querySelector('tr').cloneNode(true));
      break;
    case 'remove-row':
      table.deleteRow(table.rows.length - 1);
      break;
    case 'append-column':
      [...table.rows].forEach((row) => {
        row.appendChild(row.cells[row.cells.length - 1].cloneNode(true));
      });
      break;
    case 'remove-column':
      [...table.rows].forEach((row) => {
        row.removeChild(row.cells[row.cells.length - 1]);
      });
      break;
  }

  const rowsLength = table.rows.length;
  const columnsLength = table.rows[0].cells.length;

  document.querySelector('.append-row').disabled = rowsLength === 10;
  document.querySelector('.remove-row').disabled = rowsLength === 2;
  document.querySelector('.append-column').disabled = columnsLength === 10;
  document.querySelector('.remove-column').disabled = columnsLength === 2;
}

buttons.addEventListener('click', (e) => {
  if (!e.target.classList.contains('button')) {
    return;
  }

  if (e.target.disabled) {
    return;
  }

  modifyColumns(e.target.classList[0]);
});
