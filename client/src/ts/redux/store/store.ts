import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { authenticatoinReducer } from "../reducers/auth-reduces";
import { timerReducer } from "../reducers/timer-reducer";

const reducer = combineReducers({
    auth: authenticatoinReducer,
    timer: timerReducer
});

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof reducer>;

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

export default store;
