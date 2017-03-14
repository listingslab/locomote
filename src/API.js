/* global moment */
/**
 * Created by Chris Dorward on 13/03/2017
 * src/Api
 */

class Api {

  constructor(app) {
    this.app = app;
    this.searching = false;
    const airlinesPromise = $.get('/airlines');
    $.when(airlinesPromise).done(function (airlines) {
      this.airlines = airlines;
    }.bind(this));
  }

  makeAPICalls(query, targetTab) {
    let numCalls = this.airlines.length;
    const date = $('#flight-date').val();
    const flightsArr = [];


    if (moment(query.date) >= moment().subtract(1, 'day')) {
      targetTab.html(`
      <img
        src="img/loader.gif"
        class="loader-img"
      />`);
      for (let i = 0; i < this.airlines.length; i += 1) {
        $.getJSON(
          `/flight_search/${this.airlines[i].code}?date=${query.date}&from=${query.from}&to=${query.to}`,
          function (flights) {
            for (let j = 0; j < flights.length; j += 1) {
              flightsArr.push(flights[j]);
            }
            numCalls -= 1;
            if (numCalls === 0) {
              this.app.results.renderResults(date, flightsArr, targetTab);
              $('#btn-search-flight').removeAttr('disabled');
              this.searching = false;
            }
          }.bind(this)
        );
      }
    } else {
      targetTab.html('<p class="tab-para">Sorry. Can not search flights dates in the past</p>');
    }
  }

  searchFlights() {
    if (!this.searching) {
      this.searching = true;
      this.app.results.hideTabs();
      this.app.results.showLoader();
      $('#btn-search-flight').attr('disabled', 'disabled');
      const from = $('#input-airport-from').val().substr(1, 3);
      const to = $('#input-airport-to').val().substr(1, 3);
      const date = $('#flight-date').val();
      this.makeAPICalls({ from, to, date: moment(date).subtract(2, 'days').format('YYYY-MM-DD') }, $('#date1'));
      this.makeAPICalls({ from, to, date: moment(date).subtract(1, 'days').format('YYYY-MM-DD') }, $('#date2'));
      this.makeAPICalls({ from, to, date }, $('#date3'));
      this.makeAPICalls({ from, to, date: moment(date).add(1, 'days').format('YYYY-MM-DD') }, $('#date4'));
      this.makeAPICalls({ from, to, date: moment(date).add(2, 'days').format('YYYY-MM-DD') }, $('#date5'));
    }
  }

  getQuery() {
    const query = {
      from: $('#input-airport-from').val().substr(1, 3),
      to: $('#input-airport-to').val().substr(1, 3),
      date: $('#flight-date').val()
    };
    return query;
  }
}

export default Api;
