/**
 * Created by Chris Dorward on 13/03/2017
 * src/Api
 */

class Api {

  constructor(app) {
    this.app = app;
    this.searching = false;
  }

  startSearch() {
    console.log('Starting Search');
    if (!this.searching) {
      this.searching = true;
      console.log(this.getQuery());
    }
  }

  getQuery() {
    const query = {
      from: $('#input-airport-from').val().substr(1,3),
      to: $('#input-airport-to').val().substr(1,3),
      date: $('#flight-date').val()
    }
    return query;
  }
}

export default Api;
