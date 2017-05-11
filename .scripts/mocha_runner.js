require('babel-core/register');
require('babel-polyfill');
require('css-modules-require-hook')({
  generateScopedName: function(exportedName, path) {
    return exportedName;
  }
});

var { JSDOM } = require('jsdom');
console.log(JSDOM);

var exposedProperties = ['window', 'navigator', 'document'];

const dom = new JSDOM('');
global.window = dom.window;
global.document = dom.window.document;

global.navigator = {
  userAgent: 'node.js'
};

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
