var apiBoilerplate =
"import xr from \'xr\';\n\
\n\
export default class apiModuleAPI {\n\
  constructor() {\n\
    this.baseUri = \'replace_with_uri\';\n\
    this.acceptJsonHeader = {headers: {Accept: \'application/json\'}};\n\
  }\n\
}\n\
\n\
export default apiModuleAPI;\n";

var mockApiBoilerplate =
"class MockapiModuleAPI {\n\
  constructor() {\n\
  }\n\
 }\n\
\n\
export default MockapiModuleAPI;\n";

module.exports = {
  apiBoilerplate: apiBoilerplate,
  mockApiBoilerplate: mockApiBoilerplate
};
