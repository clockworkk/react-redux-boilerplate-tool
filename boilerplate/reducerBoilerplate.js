var boilerplate =
  "import {Map} from \'immutable\';\n\
import * as types from \'../constants/ActionTypes\';\n\
\n\
const initialState = {\n\
};\n\
\n\
export default function reducerName(state = initialState, action) {\n\
  switch (action.type) {\n\
    default:\n\
      return state;\n\
  }\n\
}\n";

module.exports = boilerplate;
