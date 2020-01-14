import { call, put, takeLatest } from "redux-saga/effects";
import service from "Ts/services/service";
import * as actions from "../actions/actions";
import { fetchNotesRequest, FETCH_NOTES_REQUEST, resetState } from "../types";

function* noteWorker({ token }: fetchNotesRequest) {
    try {
        const posts = yield call(service.getNotes, token);
        yield put(actions.fetchNoteSuccess(posts));
    } catch (error) {
        yield put(actions.fetchNoteFailure(error));
        if (error.response.status === 403) {
            yield put(resetState());
        }
    }
}

export function* noteWatcher(): any {
    yield takeLatest(FETCH_NOTES_REQUEST, noteWorker);
}
