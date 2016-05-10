var boilerplate =
  "import * as types from \'../constants/ActionTypes\';\n\
import MockapiModuleAPI from \'../debug/MockapiModuleAPI\';\n\
import apiModuleAPI from \'../utils/apiModuleAPI\';\n\
\n\
const api = window.useMockApi ? new MockapiModuleAPI() :\n\
  new apiModuleAPI();\n\
\n\
export function actionFailed(message) {\n\
  return {\n\
    type: types.STATUS_CHANGE,\n\
    actionStatus: false,\n\
    message\n\
  };\n\
}\n\
\n\
export function actionSuccessful(message) {\n\
  return {\n\
    type: types.STATUS_CHANGE,\n\
    actionStatus: true,\n\
    message\n\
  };\n\
}\n";

module.exports = boilerplate;
