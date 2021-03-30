const { healthRouter } = require('./health.route');
const { testRouter } = require('./test.route');
const { contentRouter } = require('./content.route');
const { instanceRouter } = require('./instance.route');

module.exports = {
  healthRouter, testRouter, contentRouter, instanceRouter,
};
