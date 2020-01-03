import { IAuthentication, ITimer } from "../state-interfaces";
import {
    AuthActionTypes,
    SET_AUTHENTICATION,
    SET_TIMER_COUNT,
    TimerActionTypes
} from "../types";

//Authentication actions
export const setAuth = (auth: IAuthentication): AuthActionTypes => {
    return {
        type: SET_AUTHENTICATION,
        payload: auth
    };
};

//Timer actions
export const setTimerCount = (time: ITimer): TimerActionTypes => {
    return {
        type: SET_TIMER_COUNT,
        payload: time
    };
};
