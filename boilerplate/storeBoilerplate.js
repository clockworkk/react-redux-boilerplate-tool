var boilerplate =
"import {createStore, applyMiddleware, compose} from \'redux\';\n\
import thunkMiddleware from \'redux-thunk\';\n\
reducerImport\n\
\n\
export default function configureStore() {\n\
  const store = compose(\n\
    applyMiddleware(thunkMiddleware)\n\
  )(createStore)(reducer);\n\
\n\
  return store;\n\
}\n";

module.exports = boilerplate;
