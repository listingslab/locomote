/* global moment */
/**
 * Created by Chris Dorward on 13/03/2017
 * src/Results
 */

class Results {

  constructor(app) {
    this.app = app;
    this.hideResults();
  }

  hideResults() {
    $('#loader').hide();
    $('#tabs').hide();
    $('#results').css('visibility', 'visible');
  }

  sortByPrice(results) {
    results.sort(function (obj1, obj2) {
      return obj1.price - obj2.price;
    });
    return results;
  }

  renderResults(date, results, targetTab) {
    const sortedResults = this.sortByPrice(results);
    $('#date1-label').html(moment(date).subtract(2, 'days').format('Do MMMM YYYY'));
    $('#date2-label').html(moment(date).subtract(1, 'days').format('Do MMMM YYYY'));
    $('#date3-label').html(moment(date).format('Do MMMM YYYY'));
    $('#date4-label').html(moment(date).add(1, 'days').format('Do MMMM YYYY'));
    $('#date5-label').html(moment(date).add(2, 'days').format('Do MMMM YYYY'));
    let rows = '';
    for (let i = 0; i < sortedResults.length; i += 1) {
      rows += `
      <tr>
        <td><strong>$${sortedResults[i].price}</strong></td>
        <td>${moment(sortedResults[i].start.dateTime).format('Do MMMM YYYY h:mm a')}</td>
        <td>${sortedResults[i].airline.name} ${sortedResults[i].airline.code} ${sortedResults[i].flightNum}</td>
        <td>${sortedResults[i].plane.shortName}</td>
        <td><button class="btn btn-sm btn-success pull-right">Book Flight</button></td>
      </tr>
      `;
    }
    const table = `
    <p class="tab-para">(sorted by price ascending)</p>
      <table class="table table-hover table-condensed table-striped">
        <tbody>
          ${rows}
        </tbody>
      </table>
    `;
    targetTab.html(table);
    this.hideLoader();
    this.showTabs();
  }

  showLoader() {
    $('#loader').show();
  }

  showTabs() {
    $('#tabs').show();
  }

  hideLoader() {
    $('#loader').hide();
  }

  hideTabs() {
    $('#tabs').hide();
  }
}

export default Results;
