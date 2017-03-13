/* eslint-disable */
/**
 * Created by Chris Dorward on 12/03/2017
 * server/endpoints/airlines
 */
const request = require('koa-request');

function route(app) {
  app.route('/airlines')
		.get(function* (next) {
			var response = yield request({
        url: 'http://node.locomote.com/code-task/airlines'
    	});
			this.body = JSON.parse(response.body);
		})
}

module.exports = route;
