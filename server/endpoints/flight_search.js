/* eslint-disable */
/**
 * Created by Chris Dorward on 12/03/2017
 * server/endpoints/flight_search
 */
const request = require('koa-request');

function route(app) {
  app.route('/flight_search/:airline_code')
		.get(function* (next) {
			var response = yield request({
        url: `http://node.locomote.com/code-task/flight_search/${this.params.airline_code}?date=${this.query.date}&from=${this.query.from}&to=${this.query.to}`
    	});
			this.body = JSON.parse(response.body);
		})
}

module.exports = route;
