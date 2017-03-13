/**
 * Created by Chris Dorward on 12/03/2017
 * src/Tabs
 */

class Tabs {

  constructor(app) {
    this.app = app;
  }

  startTabs() {
    this.clearTabs();
    this.renderTabs();
  }

  renderTabs() {
    const tabs = `
      <ul class="nav nav-tabs" role="tablist">
        <li role="presentation">
          <a href="#date1" aria-controls="date1" role="tab" data-toggle="tab">Date 1</a>
        </li>
        <li role="presentation">
          <a href="#date2" aria-controls="date2" role="tab" data-toggle="tab">Date 2</a>
        </li>
        <li role="presentation" class="active">
          <a href="#date3" aria-controls="date3" role="tab" data-toggle="tab">Date 3</a>
        </li>
        <li role="presentation">
          <a href="#date4" aria-controls="date4" role="tab" data-toggle="tab">Date 4</a>
        </li>
        <li role="presentation">
          <a href="#date5" aria-controls="date5" role="tab" data-toggle="tab">Date 5</a>
        </li>
      </ul>

      <div class="tab-content">
        <div role="tabpanel" class="tab-pane fade" id="date1">
          results for date 1
        </div>
        <div role="tabpanel" class="tab-pane fade" id="date2">
          results for date 2
        </div>
        <div role="tabpanel" class="tab-pane fade in active" id="date3">
          results for date 3
        </div>
        <div role="tabpanel" class="tab-pane fade" id="date4">
          results for date 4
        </div>
        <div role="tabpanel" class="tab-pane fade" id="date5">
          results for date 5
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
