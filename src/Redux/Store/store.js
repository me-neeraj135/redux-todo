/** @format */

import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "../Reducer/rootReducer";

const store = createStore(rootReducer);

export default store;
