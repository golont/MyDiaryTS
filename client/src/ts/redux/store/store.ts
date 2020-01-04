import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { authenticatoinReducer } from "../reducers/auth-reducer";
import { timerReducer } from "../reducers/timer-reducer";
import { dataReducer } from "../reducers/data-reducer";
import { noteWatcher } from "../sagas/notes-saga";

const reducer = combineReducers({
    auth: authenticatoinReducer,
    data: dataReducer,
    timer: timerReducer
});

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof reducer>;

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(noteWatcher);

export default store;
