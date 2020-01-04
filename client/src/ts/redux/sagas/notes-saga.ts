import { call, put, takeLatest } from "redux-saga/effects";
import service from "Ts/services/service";
import * as actions from "../actions/actions";
import { fetchNotesRequest, FETCH_NOTES_REQUEST } from "../types";

function* noteWorker({ token }: fetchNotesRequest) {
    try {
        const posts = yield call(service.getNotes, token);
        yield put(actions.fetchNoteSuccess(posts));
    } catch (error) {
        console.error(error);
        yield put(actions.fetchNoteFailure(error));
    }
}

export function* noteWatcher(): any {
    yield takeLatest(FETCH_NOTES_REQUEST, noteWorker);
}
