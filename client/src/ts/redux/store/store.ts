import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { noteWatcher } from "../sagas/notes-saga";
import { reducer } from "../reducers/root-reducer";

const sagaMiddleware = createSagaMiddleware();

export type RootState = ReturnType<typeof reducer>;

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(noteWatcher);

export default store;
