#! /usr/bin/env node

/**
 * Tool to be utilized by developers
 * to create file structure and boilerplate
 * when creating a new API and Mock API
 *
 */

var fs = require('fs');
var program = require('commander');

var boilerplate = require('../boilerplate/apiBoilerplate');

program
  .usage('node createNewApiWrapper.js -n TestApp\n\
  If running thru npm:\n\
  npm run new:apiWrapper -- -n TestApp')
  .option('-n, --name [filename]', 'The name of the Mock API and API Wrappers.')
  .parse(process.argv);

if (!program.name) {
  console.log("A filename must be given to create the Mock API and API wrappers.");
  return
} else {
  console.log("Creating Mock API Wrapper ./debug and an API Wrapper in ./utils");
  createFile(program.name);
};

function createFile(filename) {
  var apiFile = './utils/' + filename + 'API.js';
  var mockFile = './debug/Mock' + filename + "API.js";
  var apiWrapperBoilerplate = apiBoilerplate(filename, boilerplate.apiBoilerplate);
  var mockWrapperBoilerplate = apiBoilerplate(filename, boilerplate.mockApiBoilerplate);

  // Write the boilerplate to the Mock API Wrapper file
  fs.writeFile(mockFile, mockWrapperBoilerplate, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The Mock API Wrapper file was successfully saved.");
  });

  // Write the boilerplate to the API Wrapper file
  fs.writeFile(apiFile, apiWrapperBoilerplate, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The API Wrapper file was successfully saved.");
  });
}

/**
 * [API Wrapper Boilerplate]
 * @param  {String} API Wrapper [Name of the API Wrappers]
 * @return {String}               [String of boilerplate code]
 */
function apiBoilerplate(apiWrapperName, api) {
  var mapObj = {
    apiModule: apiWrapperName
  };

  return (api.replace(/apiModule/gi, function(matched) {
    return mapObj[matched];
  }));
}

