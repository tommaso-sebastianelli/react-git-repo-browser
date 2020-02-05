import { all, put, take } from 'redux-saga/effects';
import { getCommit } from '../../api';
import { selectCommitFailure, selectCommitSuccess } from './actions';
import { SELECT_COMMIT_START } from './types';

function* watchCommitSelect() {
    while (true) {
        const { payload } = yield take(SELECT_COMMIT_START);
        try {
            const { data } = yield (getCommit(payload.user, payload.repo, payload.selectedCommitId).toPromise());
            yield put(selectCommitSuccess(data));
        } catch (err) {
            console.error(err);
            yield put(selectCommitFailure(err.message));
        }
    }
}

export default function* sagas() {
    yield all([
        watchCommitSelect()
    ])
}