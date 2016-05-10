## React Tooling
Some quick and easy commands to create ES6 component boilerplate.

Creating a new stateful React Component with PropTypes:
```
npm run new:component -- -d ./components/NewStuff -n NewComponent -p propType1,propType2,propType3,PropType4
```

Creating a new stateful React Component without PropTypes:
```
npm run new:component -- -d ./components/NewStuff -n NewComponent
```

Creating a new stateless React Component with PropTypes:
```
npm run new:component -- -s -d ./component/NewStuff -n NewComponent -p propType1,propType2,propType3,PropType4
```

Creating a new stateless React Component without PropTypes
```
npm run new:component -- -s -d ./component/NewStuff -n NewComponent
```

Creating a new Redux Reducer:
```
npm run new:reducer -- -d ./reducers -n TestReducer
```

Creating a new Redux Actions:
```
npm run new:action -- -d ./actions -n TestApp
```

Creating a new Redux Store:
```
npm run new:store --n TestApp
```

Creating a new Mock API/API Wrapper:
```
npm run new:api -- -n TestApp
```

You can also run any of the npm scripts with the -h flag for help.
