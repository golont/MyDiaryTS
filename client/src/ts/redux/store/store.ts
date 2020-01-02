import { createStore, applyMiddleware, combineReducers } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
// import reducer from "./../reducers/reducer";
const reducer = () => {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducer,
    undefined,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;
