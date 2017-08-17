[![Travis Build Status](https://travis-ci.org/rte-antares-rpackage/js-client-tmpl.svg?branch=master)](https://travis-ci.org/rte-antares-rpackage/js-client-tmpl)
[![Appveyor Build Status](https://ci.appveyor.com/api/projects/status/u2eqak19662etpu6/branch/master?svg=true
)](https://ci.appveyor.com/project/rte-antares-rpackage/js-client-tmpl)
[![codecov](https://codecov.io/gh/rte-antares-rpackage/js-client-tmpl/branch/master/graph/badge.svg)](https://codecov.io/gh/rte-antares-rpackage/js-client-tmpl)

# A template for robust client-side javascript libraries

This repository contains a template that can be used to create a new client-side javascript library. It has everything that is required to run automatic tests, use popular continuous integration tools (travis-ci.org and appveyor.com) and compute code coverage.

Testing, using continuous integration and getting code coverage is somehow difficult in general but when you write a library that can only be tested in a browser, it is especially painful! It took us days to figure out how to do this correctly and we hope this repository will help some people save time and energy.

Our framework is largely inspired from [this blog post](https://blog.engineyard.com/2015/measuring-clientside-javascript-test-coverage-with-istanbul).

## Create a new library
We assume you have a working installation of `node` and `npm`.

To create a new library, you can use the following script to clone this repository and reinitialize git:
```sh
git clone --depth 1 https://github.com/rte-antares-rpackage/js-client-tmpl myLibName
cd myLibName
rm -Rf .git
git init
```
Take a look at the `package.json` file and edit it to your liking. Once you are done, save and run the following command to install all dev dependencies:
```sh
npm install
```

The repository contains sample scripts for demonstration. You should take a look at them and then remove them:
```sh
rm dist/* src/* test/src/test-* test/test.js
```

## Write code
Javascript code should go in the `src` directory. You can use `require()` and split your code by creating modules like in regular node programs. If you are not used to it, you can take a look at the sample scripts already in the `src` directory or find some online documentation (https://www.w3schools.com/nodejs/nodejs_modules.asp for instance). If you need to use other npm libraries, use the following command:
```sh
npm install --save myDependency
```

By default, `main.js` is the main script of the library. It should expose an object in the global scope to make it available to users:
```js
if (window) window.MyLib = MyLib;
```
At this point, the library cannot be used in a browser because `require()` is not defined in browsers. To compile the code run the next command in terminal:
```sh
grunt build
```
This command calls [`browserify`](http://browserify.org/) and [uglifyJS](https://github.com/mishoo/UglifyJS2) to compile the library. A normal version and a minified one are created and put in the `dist` folder.

## Create tests
Tests are run in a headless browser with [mocha](https://mochajs.org/) and [phantomJS](http://phantomjs.org/). Tests scripts go in the `tests/src` folder. They should have the following structure:

```js
var assert = require("assert");

describe("myFunction", function() {
  it("does some cool stuf", function() {
    ...
    assert.ok(...);
  });

  it("returns interesting value", function() {
    ...
    assert.equal(...);
  });
});
```

If you need some DOM elements for your your tests, you can either create them in the scripts or directly modify `test/test.html`. To run the tests, use:
```sh
grunt test
```
You can also automatically run tests when you modify a script with the following command:
```sh
grunt watch
```
Note that you can also open the the `test.html` page with a browser to look at what your tests do in live and for further inspection with the javascript console.

## Get code coverage
To get code coverage, simply run:
```sh
grunt coverage
```
This prints information about coverage in the terminal, but it also creates a HTML report in `test/coverage/cov-report`. Open it with a browser to see which lines are not covered. Code coverage is computed by [Istanbul](https://github.com/gotwarlost/istanbul).

## Configure continuous integration
The repository already contains configuration files for [Travis](https://travis-ci.org/), [Appveyor](https://www.appveyor.com/) and [codecov](https://codecov.io/gh). Create an account in each site and enable the three services for your github repository. After that, each time you will push your code on Github, Travis and Appveyor will retrieve the last version and run your tests. Travis will then upload a coverage report on Codecov.

## Examples
The repository already contains some sample scripts in `src` and `test/src`. For a concrete example, you can have a look at the repository of the [minicharts library](https://github.com/rte-antares-rpackage/minicharts).

## Contributing
If you have ideas to improve this framework, do not hesitate to contribute by creating issues or submitting pull requests to this repository.
