function highlight(table) {
  // ваш код...
  for (let row of table.rows) {
    let lastCell = row.cells[row.cells.length - 1];

    if ( lastCell.dataset.available === 'true' ) {
      row.classList.add( 'available' );
    } else if ( lastCell.dataset.available === 'false' ) {
      row.classList.add( 'unavailable' );
    } else if ( !lastCell.hasAttribute( 'data-available' )) {
      row.hidden = true;
    }

    for (let i = 0; i < row.cells.length; i++) {

      if ( row.cells[i].textContent === 'm' ) {
        row.classList.add('male');
      } else if ( row.cells[i].textContent === 'f' ) {
        row.classList.add('female');
      } else if ( !isNaN(row.cells[i].textContent) && row.cells[i].textContent < 18 ) {
        row.style.textDecoration = 'line-through';
      }
    }
  }
}
