/* eslint-disable */
/**
 * Created by Chris Dorward on 12/03/2017
 * server/endpoints/airports
 */
const request = require('koa-request');

function route(app) {
  app.route('/airports')
		.get(function* (next) {
			var response = yield request({
        url: `http://node.locomote.com/code-task/airports?q=${this.query.query}`
    	});
			var tweakedAirports = JSON.parse(response.body).map(function(obj) {
			  var rObj = {};
			  rObj = obj;
				rObj.displayField = `(${obj.airportCode}) ${obj.airportName.replace('Arpt', 'Airport')}, ${obj.cityName}, ${obj.countryName}`;
			  return rObj;
			});
			this.body = tweakedAirports;
		})
}

module.exports = route;
