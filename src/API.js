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

  searchFlights() {
    if (!this.searching) {
      this.searching = true;
      $('#btn-search-flight').attr('disabled', 'disabled');
      const query = this.getQuery();
      this.app.tabs.startTabs(query);
      let numCalls = this.airlines.length;
      const flightsArr = [];
      for (let i = 0; i < this.airlines.length; i += 1) {
        $.getJSON(
          `/flight_search/${this.airlines[i].code}?date=${query.date}&from=${query.from}&to=${query.to}`,
          function (flights) {
            for (let j = 0; j < flights.length; j += 1) {
              flightsArr.push(flights[j]);
            }
            numCalls -= 1;
            if (numCalls === 0) {
              this.app.table.startTable(flightsArr);
              $('#btn-search-flight').removeAttr("disabled");
              this.searching = false;
            }
          }.bind(this)
        );
      }
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
