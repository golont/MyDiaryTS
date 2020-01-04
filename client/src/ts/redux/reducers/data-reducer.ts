import { IData, initState } from "../state-interfaces";
import {
    DataActionTypes,
    FETCH_NOTES_REQUEST,
    PaginationActionTypes,
    SET_PAGINATION,
    FETCH_NOTES_FAILURE,
    FETCH_NOTES_SUCCESS
} from "../types";

export const dataReducer = (
    state = initState.data,
    action: DataActionTypes | PaginationActionTypes
): IData => {
    switch (action.type) {
        case SET_PAGINATION:
            const { place, payload } = action;
            if (place === "data") {
                return {
                    ...state,
                    pagination: { ...state.pagination, ...payload }
                };
            }
            return state;
        case FETCH_NOTES_REQUEST:
            return {
                ...state,
                loading: true,
                error: false
            };
        case FETCH_NOTES_FAILURE:
            return {
                ...state,
                loading: false,
                error: true
            };
        case FETCH_NOTES_SUCCESS:
            const allNotes = [...action.payload];
            const len = allNotes.length;
            const lastNote = allNotes[len - 1];
            allNotes.pop();
            return {
                ...state,
                loading: false,
                lastNote,
                previousNotes: allNotes.reverse(),
                totalNotes: len
            };
        default:
            return state;
    }
};
