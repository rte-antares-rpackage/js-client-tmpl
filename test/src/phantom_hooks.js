// You should not move or edit this file

module.exports = {
  afterEnd: function(runner) {
    var fs = require('fs');
    var coverage = runner.page.evaluate(function() {
      return window.__coverage__;
    });

    if (coverage) {
      console.log('Writing coverage to test/coverage/coverage.json');
      fs.write('test/coverage/coverage.json', JSON.stringify(coverage), 'w');
    } else {
      console.log('No coverage data generated');
    }
  }
};
