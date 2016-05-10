#! /usr/bin/env node

/**
 * Tool to be utilized by developers
 * to create filestructure and boilerplate
 * when creating a new React component
 *
 */
var fs = require('fs');
var program = require('commander');
var mkdirp = require('mkdirp');

var componentBoilerplate = require('../boilerplate/componentBoilerplate');
var statelessComponentBoilerplate = require('../boilerplate/statelessComponentBoilerplate');

program
  .version('0.0.1')
  .usage('node createNewComponent.js -d ./components/NewStuff -n NewComponent\n\n\
  If you need to include propTypes:\n\
  createNewComponent -d ./components/NewStuff -n NewComponent -p propType1,propType2,propType3,PropType4\n\n\
  If running thru npm:\n\
  npm run new:component -- -d ./components/NewStuff -n NewComponent\n\
  npm run new:component -- -d ./components/NewStuff -n NewComponent -p propType1,propType2,propType3,PropType4\n')
  .option('-d, --directory [path]', 'The directory in which the React component will be created.  If the directory does not exist it will be created.')
  .option('-n, --name [filename]', 'The name of the React Component.')
  .option('-s, --stateless', 'Create a new component with stateless component boilerplate.')
  .option('-p --propTypes [propTypes]', 'Optional. If the component has proptypes create them here.', list)
  .parse(process.argv);

if (!program.name || !program.directory) {
  console.log("Both a filename and the relative path of the location of where the file is to be created must be included.");
  return
}
else {
  console.log("Creating React Component: %s in directory %s", program.name, program.directory);
  if(program.propTypes) {
    console.log("With propTypes: %s", program.propTypes.join(", "))
  }
  createFile(program.name, program.directory);
}

/**
 * [Creates a file in the given directory with boilerplate]
 * @param  {String} filename  [Name of the component and file]
 * @param  {String} directory [Location of the directory]
 * @return {null}
 */
function createFile(filename, directory) {
  // Create the path to the file and the filename
  var file = directory + '/' + filename + '.jsx';
  var boilerplate = (!program.stateless) ? componentBoilerplate(filename) : statelessBoilerplate(filename);
  /* Check to see if the directory exists
   * if it does not then create it
   */
  mkdirp(directory);

  // Write the boilerplate to the file
  fs.writeFile(file, boilerplate, function(err) {
    if(err) {
      return console.log(err);
    }
    console.log("The file was successfully saved");
  });
}

/**
 * [Regular statefull component boilerplate]
 * @param  {String} componentName [Name of the component]
 * @return {String}               [String of boilerplate code]
 */
function componentBoilerplate(componentName) {
  if (program.propTypes) {
    var mapObj = {
      componentName: componentName,
      propTypeBoilerplate: propTypeBoilerplate(componentName)
    };

    return (componentBoilerplate.replace(/componentName|propTypeBoilerplate/gi, function(matched) {
      return mapObj[matched];
    }));
  } else {
    var mapObj = {
      componentName: componentName,
      propTypeBoilerplate: ""
    };

    return (componentBoilerplate.replace(/componentName|propTypeBoilerplate/gi, function(matched) {
      return mapObj[matched];
    }));
  }
}

/**
 * [PropType Boilerplate string]
 * @param  {String} componentName [Name of Component]
 * @return {String}               [String of boilerplate code]
 */
function propTypeBoilerplate(componentName) {
  var propTypeBoilerplate = "\n%s.propTypes = {\n";

  var propTypeStrings = "";
  program.propTypes.forEach(function(value, i) {
    propTypeStrings += "  " + value + ": PropTypes.,\n"
  });

  propTypeBoilerplate += propTypeStrings +"};\n";

  return propTypeBoilerplate.replace(/%s/gi, componentName);
};

/**
 * [Stateless component boilerplate code]
 * @param  {String} componentName [Name of Component]
 * @return {String}               [String of Prop Type boilerplate code]
 */
function statelessBoilerplate(componentName) {
  // Initial boilerplate

  // If the stateless component has propTypes make the propTypes
  if (program.propTypes) {
    // Map componentName to componentName
    // Map propList to the propTypes
    var mapObj = {
      componentName: componentName,
      propList: program.propTypes.join(", "),
      propTypeBoilerplate: propTypeBoilerplate(componentName)
    };

    return (statelessComponentBoilerplate.replace(/componentName|propList|propTypeBoilerplate/gi, function(matched) {
      return mapObj[matched];
    }));
  } else {
    var mapObj = {
      componentName: componentName,
      propList: "",
      propTypeBoilerplate: ""
    }

    return statelessComponentBoilerplate.replace(/componentName|propList|propTypeBoilerplate/gi, function(matched) {
      return mapObj[matched];
    });
  }
}

/*
 * Coercion for accepting a list.
 */
function list(val) {
  return val.split(',');
}