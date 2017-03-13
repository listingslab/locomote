/**
 * Created by Chris Dorward on 12/03/2017
 * src/Main
 */

import InputControls from './InputControls';
import Tabs from './Tabs';

$(document).ready(function () {
  const app = {};
  app.tabs = new Tabs(app);
  app.inputControls = new InputControls(app);
});
