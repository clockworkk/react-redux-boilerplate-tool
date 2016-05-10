#! /usr/bin/env node

/**
 * Tool to be utilized by developers
 * to create file structure and boilerplate
 * when creating a new Redux Action
 *
 */

var fs = require('fs');
var program = require('commander');
var mkdirp = require('mkdirp');

var boilerplate = require('../boilerplate/actionsBoilerplate');

program
  .usage('node createNewAction.js -d ./actions -n TestApp\n\
  If running thru npm:\n\
  npm run new:actions -- -d ./actions -n TestApp')
  .option('-d, --directory [path]', 'The directory in which the Action will be created.  If the directory does not exist it will be created.')
  .option('-n, --name [filename]', 'The name of the Redux Action and part of the API/Mock API')
  .parse(process.argv);

if (!program.name || !program.directory) {
  console.log("Both a filename and the relative path of the location of where the file is to be created must be included.");
  return
} else {
  console.log("Creating Redux Action %s in directory %s", program.name, program.directory);
  createFile(program.name, program.directory);
};

function createFile(filename, directory) {
  // Create the path to the file and the filename
  var file = directory + '/' + filename + 'Actions.js';
  var boilerplate = actionsBoilerplate(filename);

  /**
   * check to see if the directory exists
   *  if it does not then create it
   */
  mkdirp(directory);

  // Write the boilerplate to the file
  fs.writeFile(file, boilerplate, function(err) {
    if (err) {
      return console.log("There was an error creating the file\n" + err);
    }
    console.log("The file was successfully saved.");
  });
}

/**
 * [Redux Action Boilerplate]
 * @param  {String} Action [Name of the Action Creator]
 * @return {String}               [String of boilerplate code]
 */
function actionsBoilerplate(actionName) {
  var mapObj = {
    apiModule: actionName
  };

  return (boilerplate.replace(/apiModule/gi, function(matched) {
    return mapObj[matched];
  }));
}
