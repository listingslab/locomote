/**
 * Created by Chris Dorward on 12/03/2017
 * src/Main
 */

import Api from './Api';
import InputControls from './InputControls';
import Results from './Results';

$(document).ready(function () {
  const app = {};
  app.api = new Api(app);
  app.results = new Results(app);
  app.inputControls = new InputControls(app);
});
