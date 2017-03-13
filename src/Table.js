/**
 * Created by Chris Dorward on 13/03/2017
 * src/Table
 */

class Table {

  constructor(app) {
    this.app = app;
  }

  startTable(results) {
    console.log(results[0]);
    let rows = '';
    for (let i = 0; i < results.length; i += 1){
      rows += `
      <tr>
        <td>${results[i].airline.code} ${results[i].flightNum}</td>
        <td>${results[i].airline.name}</td>
        <td>${moment(results[i].start.dateTime).format('hh-mm')}</td>
        <td>$${results[i].price}</td>
      </tr>
      `;
    }
    this.renderTable(rows);
  }

  renderTable(rows) {
    const table = `
      <table class="table table-hover table-bordered table-condensed table-striped">
        <thead>
          <tr>
            <th>Flight Number</th>
            <th>Airline</th>
            <th>Departure time</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
    $('#date3').html(table);

  }
}

export default Table;
