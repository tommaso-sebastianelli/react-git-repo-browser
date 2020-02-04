import { all, put, takeLatest } from 'redux-saga/effects';
import { getCommit } from '../../api';
import { selectCommitFailure, selectCommitSuccess } from './actions';
import { SELECT_COMMIT_START } from './types';

function* watchCommitSelect() {
    while (true) {
        const { user, repo, id } = yield takeLatest(SELECT_COMMIT_START);
        try {
            const { data } = yield getCommit(user, repo, id);
            yield put(selectCommitSuccess(data));
        } catch (err) {
            console.err(err);
            yield put(selectCommitFailure(err.message));
        }
    }
}

export default function* rootSaga() {
    yield all([
        watchCommitSelect()
    ])
}