import { all, put, take } from 'redux-saga/effects';
import { listCommits } from '../../api';
import { searchRepoFailure, searchRepoSuccess } from './actions';
import { SEARCH_REPO_START } from './types';

function* watchRepoSearch() {
    while (true) {
        const { payload } = yield take(SEARCH_REPO_START);
        try {
            const { data } = yield (listCommits(payload.user, payload.repo).toPromise());
            yield put(searchRepoSuccess(data));
        } catch (err) {
            console.error(err);
            yield put(searchRepoFailure(err.message));
        }
    }
}

export default function* sagas() {
    yield all([
        watchRepoSearch()
    ])
}