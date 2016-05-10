#! /usr/bin/env node

/**
 * Tool to be utilized by developers
 * to create file structure and boilerplate
 * when creating a new Redux reducer
 *
 */

var fs = require('fs');
var program = require('commander');
var mkdirp = require('mkdirp');

var boilerplate = require('../boilerplate/reducerBoilerplate');

program
  .usage('node createNewReducer.js -d ./reducers/Test/ -n TestReducer\n\n\
  If running thru npm:\n\
  npm run new:reducer -- -d ./reducers/Test/ -n TestReducer')
  .option('-d, --directory [path]', 'The directory in which the Reducer will be created.  If the directory does not exist it will be created.')
  .option('-n, --name [filename]', 'The name of the Redux Reducer.')
  .parse(process.argv);

if (!program.name || !program.directory) {
  console.log("Both a filename and the relative path of the location of where the file is to be created must be included.");
  return
} else {
  console.log("Creating Redux Reducer %s in directory %s", program.name, program.directory);
  createFile(program.name, program.directory);
};

function createFile(filename, directory) {
  // Create the path to the file and the filename
  var file = directory + '/' + filename +'.js';
  var boilerplate = reducerBoilerplate(filename);

  /**
   * check to see if the directory exists
   *  if it does not then create it
   */
  mkdirp(directory);

  // Write the boilerplate to the file
  fs.writeFile(file, boilerplate, function(err) {
    if (err) {
      return console.log(err);
    }
    console.log("The file was successfully saved.");
  });
}

/**
 * [Redux Reducer Boilerplate]
 * @param  {String} Reducer [Name of the Reducer]
 * @return {String}               [String of boilerplate code]
 */
function reducerBoilerplate(reducerName) {
  var mapObj = {
    reducerName: reducerName
  };

  return (boilerplate.replace(/reducerName/gi, function(matched) {
    return mapObj[matched];
  }));
}

