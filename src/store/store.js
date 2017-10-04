import { reducers } from "./../reducers/bundle.reducers";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
export const store = createStoreWithMiddleware(reducers);
