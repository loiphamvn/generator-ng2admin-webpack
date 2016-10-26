'use strict';
var path = require('path');

var helpers = require('yeoman-test');

describe('generator-ng2admin-webpack:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({
        someAnswer: true
      })
      .toPromise();
  });
});