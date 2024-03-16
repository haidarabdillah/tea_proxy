'use strict';

const path = require('path');
const AutoLoad = require('@fastify/autoload');
const { initTokenABI } = require('./services/init');

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};
async function initABI() {
  console.log('running init');
  await initTokenABI();
}

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts),
  });
  await initABI();
};
