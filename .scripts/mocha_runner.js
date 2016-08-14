require('babel-core/register');
require('babel-polyfill');
var sass = require('node-sass')
var hook = require('css-modules-require-hook')({
  extensions: [ '.scss' ],
  preprocessCss: data => sass.renderSync({ data }).css,
  generateScopedName: function(exportedName, path) {
    return exportedName;
  }
});


var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

global.navigator = {
  userAgent: 'node.js'
};

process.on('unhandledRejection', function (error) {
  console.error('Unhandled Promise Rejection:');
  console.error(error && error.stack || error);
});
