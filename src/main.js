/**
 * Created by Chris Dorward on 12/03/2017
 * app/main
 */

import InputControls from './InputControls';
import SearchFlights from './SearchFlights';

const app = {};

app.flights = new SearchFlights(app);
app.controls = new InputControls(app);
