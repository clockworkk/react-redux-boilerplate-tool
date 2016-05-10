var boilerplate =
  "import React, {PropTypes} from \'react\';\n\
import {shouldComponentUpdate} from \'react-addons-pure-render-mixin\';\n\
import classNames from \'classnames\';\n\n\
export default class componentName extends React.Component {\n\
  constructor(props) {\n\
    super(props);\n\
    this.shouldComponentUpdate = shouldComponentUpdate;\n\
  }\n\
  \n\
  render() {\n\
    return (\n\
    );\n\
  }\n\
}\n\
propTypeBoilerplate\n\
export default componentName;\n\
";

module.exports = boilerplate;
