import { initState, IAuthentication } from "../state-interfaces";
import { AuthActionTypes, SET_AUTHENTICATION } from "../types";

export const authenticatoinReducer = (
    state = initState.auth,
    { type, payload }: AuthActionTypes
): IAuthentication => {
    switch (type) {
        case SET_AUTHENTICATION:
            return {
                ...state,
                ...payload
            };
        default:
            return state;
    }
};
