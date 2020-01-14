import { IAuthentication, ITimer, INote, IPaginate } from "./state-interfaces";

//ResetType
export const RESET_STATE = "RESET_STATE";
export type ResetState = typeof RESET_STATE;
export const resetState = () => ({ type: RESET_STATE });

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

//Data types
export const FETCH_NOTES_REQUEST = "FETCH_NOTES_REQUEST";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";
export const SET_LAST_NOTE = "SET_LAST_NOTE";

export interface fetchNotesRequest {
    type: typeof FETCH_NOTES_REQUEST;
    payload?: string;
    token: string;
}

interface fetchNotesSuccess {
    type: typeof FETCH_NOTES_SUCCESS;
    payload: INote[];
}
interface fetchNotesFailure {
    type: typeof FETCH_NOTES_FAILURE;
    payload: Error;
}

interface setLastNote {
    type: typeof SET_LAST_NOTE;
    payload: {
        title?: string;
        text?: string;
    };
}

export type DataActionTypes =
    | fetchNotesFailure
    | fetchNotesSuccess
    | fetchNotesRequest
    | setLastNote;

//Lastpost

//Pagination types
export type PlaceType = "search" | "data";
export const SET_PAGINATION = "SET_PAGINATION";
interface setPagination {
    type: typeof SET_PAGINATION;
    payload: IPaginate;
    place: PlaceType;
}

export type PaginationActionTypes = setPagination;

//Search types
