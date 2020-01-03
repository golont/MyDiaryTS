import { IAuthentication, ITimer } from "./state-interfaces";
//Authentication types
export const SET_AUTHENTICATION = "SET_AUTHENTICATION";
interface setAuth {
    type: typeof SET_AUTHENTICATION;
    payload: IAuthentication;
}
export type AuthActionTypes = setAuth;

//Timer types
export const SET_TIMER_COUNT = "SET_TIMER_COUNT";
interface setTimer {
    type: typeof SET_TIMER_COUNT;
    payload: ITimer;
}
export type TimerActionTypes = setTimer;

//
