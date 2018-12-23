import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";

export const api = axios.create({
  baseURL: "/api/",
  headers: {
    "Content-Type": "application/json"
  },
  proxy: {
    host: "http://localhost",
    port: 3001
  }
});

import historyModel from "./reducer";

const reduxMiddlewares = applyMiddleware(ReduxThunk.withExtraArgument(api));
const devToolsWithMiddlewares = composeWithDevTools(reduxMiddlewares);

export default createStore(historyModel, devToolsWithMiddlewares);
