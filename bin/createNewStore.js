#! /usr/bin/env node

/**
 * Tool to be utilized by developers
 * to create file structure and boilerplate
 * when creating a new Redux Store
 *
 */

var fs = require('fs');
var program = require('commander');
var mkdirp = require('mkdirp');

var boilerplate = require('../boilerplate/storeBoilerplate');

program
  .usage('node createNewStore.js -n Test -r TestReducer\n\
  If running thru npm:\n\
  npm run new:store -- -n Test -r TestReducer')
  .option('-r, --reducer [filename]', 'The name of the Redux Reducer being used in the store.')
  .option('-n, --name [filename]', 'The name of the Redux Store.')
  .parse(process.argv);

if (!program.name || !program.reducer) {
  console.log("A filename, Reducer, and Absolute Path to Reducer from the root of the React directory must be given to create the Redux Store");
  return
} else {
  console.log("Creating Redux Store: %s in ./stores.", program.name);
  createFile(program.name, program.reducer);
};

function createFile(filename, reducer) {
  var file = './stores/' + filename + 'Store.js';
  var boilerplate = storeBoilerplate(filename, reducer);

  fs.writeFile(file, boilerplate, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was successfully saved.");
  });
}

/**
 * [Redux Store Boilerplate]
 * @param  {String} Store [Name of the Store]
 * @return {String}               [String of boilerplate code]
 */
function storeBoilerplate(fileName, reducer) {
  var mapObj = {
    reducerImport: "import " + reducer + " from ../reducers/" + reducer,
    reducer: reducer

  };

  return (boilerplate.replace(/reducerImport|reducer/gi, function(matched) {
    return mapObj[matched];
  }));
}
