/**
 * Created by Chris Dorward on 12/03/2017
 * src/Main
 */

import Api from './Api';
import InputControls from './InputControls';
import Table from './Table';
import Tabs from './Tabs';

$(document).ready(function () {
  const app = {};
  app.api = new Api(app);
  app.table = new Table(app);
  app.tabs = new Tabs(app);
  app.inputControls = new InputControls(app);
});
