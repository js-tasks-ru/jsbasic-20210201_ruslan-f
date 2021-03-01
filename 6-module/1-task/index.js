/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */
export default class UserTable {
  constructor(rows) {
    this.table = document.createElement('table');

    this.table.innerHTML = `
      <thead>
          <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
          </tr>
      </thead>`;
    
    let row = this.rows.map( rowItem => {
      return `
        <tr>
          <td>${rowItem.name}</td>
          <td>${rowItem.age}</td>
          <td>${rowItem.salary}</td>
          <td>${rowItem.city}</td>
          <td><button>X</button></td>
        </tr>
      `;
    }).join('');

    this.table.innerHTML += `
      <tbody>
        ${row}
      <tbody>
    `;

    this.table.addEventListener('click', (event) {
      if (event.target.tagName != 'BUTTON') {
        return;
      }
  
      let tr = event.target.closest('tr');
  
      tr.remove();
    });
  }
}
