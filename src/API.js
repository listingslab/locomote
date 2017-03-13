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
      $('#tabs').html(this.airlines[0].name);
    });
  }

  startSearch() {
    if (!this.searching) {
      $('#btn-search-flight').attr('disabled', 'disabled');
      this.searching = true;
      this.app.tabs.startTabs(this.getQuery());
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
