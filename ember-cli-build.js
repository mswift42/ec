/* global require, module */

var Angular2App = require('angular-cli/lib/broccoli/angular2-app');
var MergeTrees = require('broccoli-merge-trees');
const BroccoliFunnel = require('broccoli-funnel');

module.exports = function(defaults) {
  var app = new Angular2App(defaults, {
    vendorNpmFiles: []
  });
  var MaterialTree = BroccoliFunnel('node_modules/@angular2-material', {
    destDir: '@angular2-material'
  });
  return MergeTrees([
      app.toTree(),
      MaterialTree,
  ])
};
