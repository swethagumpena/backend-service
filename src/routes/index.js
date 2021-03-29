const { healthRouter } = require('./health.route');
const { testRouter } = require('./test.route');
const { contentRouter } = require('./content.route');

module.exports = { healthRouter, testRouter, contentRouter };
