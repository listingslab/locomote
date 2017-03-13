/**
 * Created by Chris Dorward on 12/03/2017
 * src/Tabs
 */

class Tabs {

  constructor(app) {
    this.app = app;
  }

  startTabs(query) {
    this.clearTabs();
    this.date1 = moment(query.date).subtract(2, 'days').format('MMMM Do YYYY');
    this.date2 = moment(query.date).subtract(1, 'days').format('MMMM Do YYYY');
    this.date3 = moment(query.date).format('MMMM Do YYYY');
    this.date4 = moment(query.date).add(1, 'days').format('MMMM Do YYYY');
    this.date5 = moment(query.date).add(2, 'days').format('MMMM Do YYYY');
    this.renderTabs();
  }

  renderTabs() {
    const tabs = `
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation">
          <a href="#date1" aria-controls="date1" role="tab" data-toggle="tab">${this.date1}</a>
        </li>
        <li role="presentation">
          <a href="#date2" aria-controls="date2" role="tab" data-toggle="tab">${this.date2}</a>
        </li>
        <li role="presentation" class="active">
          <a href="#date3" aria-controls="date3" role="tab" data-toggle="tab">${this.date3}</a>
        </li>
        <li role="presentation">
          <a href="#date4" aria-controls="date4" role="tab" data-toggle="tab">${this.date4}</a>
        </li>
        <li role="presentation">
          <a href="#date5" aria-controls="date5" role="tab" data-toggle="tab">${this.date5}</a>
        </li>
      </ul>

      <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade" id="date1">
          <img
            src="img/loader.gif"
            class="loader"
          />
        </div>
        <div role="tabpanel" class="tab-pane fade" id="date2">
          <img
            src="img/loader.gif"
            class="loader"
          />
        </div>
        <div role="tabpanel" class="tab-pane fade in active" id="date3">
          <img
            src="img/loader.gif"
            class="loader"
          />
        </div>
        <div role="tabpanel" class="tab-pane fade" id="date4">
          <img
            src="img/loader.gif"
            class="loader"
          />
        </div>
        <div role="tabpanel" class="tab-pane fade" id="date5">
          <img
            src="img/loader.gif"
            class="loader"
          />
        </div>
      </div>
    `;
    $('#tabs').html(tabs);
  }

  clearTabs() {
    $('#search-results').html('');
  }
}

export default Tabs;
