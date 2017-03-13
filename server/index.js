/**
 * Created by Chris Dorward on 12/03/2017
 * server/index
 */
require('./utils/object-assign-polyfil.js');

const env = process.env;

const koa = require('koa');
const serve = require('koa-static-server');
const routing = require('koa-routing');
const body = require('koa-better-body');

const app = koa();

app.use(serve({
  rootDir: 'public'
}));

app.use(function* (next) {
  yield next;
  this.set('Access-Control-Allow-Origin', '*');
  this.set('Access-Control-Allow-Methods', 'GET, PUT, DELETE, POST');
  this.set('Access-Control-Allow-Headers', 'X-Requested-With,Content-Type');
  this.set('Content-Type', 'application/json');
});

app.use(body());
app.use(routing(app));

app.route('*')
 .options(function* (next) {
   this.status = 200;
   yield next;
 });

// IMPORTANT: Application HAS to respond to GET /health with status 200
//            for OpenShift health monitoring
require('./endpoints/health')(app);
require('./endpoints/airlines')(app);
require('./endpoints/airports')(app);


app.listen(env.NODE_PORT || 3000, env.NODE_IP || 'localhost', function () {
  console.log(`Application worker ${process.pid} started...`);
});
