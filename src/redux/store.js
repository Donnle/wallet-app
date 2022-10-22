import {applyMiddleware, createStore} from "redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";


const enhancer = applyMiddleware(
  thunk,
);

export default createStore(reducers, composeWithDevTools(enhancer))
