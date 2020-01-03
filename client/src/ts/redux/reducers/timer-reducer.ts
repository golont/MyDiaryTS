import { initState, ITimer } from "../state-interfaces";
import { TimerActionTypes, SET_TIMER_COUNT } from "../types";

export const timerReducer = (
    state = initState.timer,
    { type, payload }: TimerActionTypes
): ITimer => {
    switch (type) {
        case SET_TIMER_COUNT:
            return { ...state, ...payload };
        default:
            return state;
    }
};
