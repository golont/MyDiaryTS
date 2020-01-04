import { IAuthentication, ITimer, INote, IPaginate } from "../state-interfaces";
import {
    AuthActionTypes,
    SET_AUTHENTICATION,
    SET_TIMER_COUNT,
    TimerActionTypes,
    DataActionTypes,
    FETCH_NOTES_REQUEST,
    FETCH_NOTES_SUCCESS,
    FETCH_NOTES_FAILURE,
    PaginationActionTypes,
    PlaceType,
    SET_PAGINATION
} from "../types";

//Authentication actions
export const setAuth = (payload: IAuthentication): AuthActionTypes => ({
    type: SET_AUTHENTICATION,
    payload
});

//Timer actions
export const setTimerCount = (payload: ITimer): TimerActionTypes => ({
    type: SET_TIMER_COUNT,
    payload
});

//Data actions

export const fetchNoteRuquest = (token: string): DataActionTypes => ({
    type: FETCH_NOTES_REQUEST,
    token
});

export const fetchNoteSuccess = (payload: INote[]): DataActionTypes => ({
    type: FETCH_NOTES_SUCCESS,
    payload
});

export const fetchNoteFailure = (payload: Error): DataActionTypes => ({
    type: FETCH_NOTES_FAILURE,
    payload
});

//Paginate action
export const setPagination = (
    payload: IPaginate,
    place: PlaceType
): PaginationActionTypes => ({
    type: SET_PAGINATION,
    payload,
    place
});

//Search actions
