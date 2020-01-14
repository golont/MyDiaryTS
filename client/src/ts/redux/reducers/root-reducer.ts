import { RootState } from "../store/store";
import { initState, AppState } from "../state-interfaces";
import { combineReducers } from "redux";
import { authenticatoinReducer } from "./auth-reducer";
import { dataReducer } from "./data-reducer";
import { timerReducer } from "./timer-reducer";
import { RESET_STATE } from "../types";

const reducerCombined = combineReducers({
    auth: authenticatoinReducer,
    data: dataReducer,
    timer: timerReducer
});

export const reducer = (state: AppState, action: any): AppState => {
    if (action.type === RESET_STATE) {
        return initState;
    }
    return reducerCombined(state, action);
};
