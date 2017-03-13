/* eslint-disable */
/**
 * Created by Chris Dorward on 12/03/2017
 * server/endpoints/health

 // IMPORTANT: Application HAS to respond to GET /health with status 200
 //            for OpenShift health monitoring
 */
function route(app) {
	app
		.route('/health')
		.get(function* (next) {
			this.status = 200;
			yield next;
		})
}

module.exports = route;
