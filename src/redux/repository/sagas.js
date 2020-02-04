import { all, put, takeLatest } from 'redux-saga/effects';
import { listCommits } from '../../api';
import { searchRepoFailure, searchRepoSuccess } from './actions';
import { SEARCH_REPO_START } from './types';

function* watchRepoSearch() {
    while (true) {
        const { user, repo } = yield takeLatest(SEARCH_REPO_START);
        try {
            const { data } = yield listCommits(user, repo);
            yield put(searchRepoSuccess(data));
        } catch (err) {
            console.err(err);
            yield put(searchRepoFailure(err.message));
        }
    }
}

export default function* rootSaga() {
    yield all([
        watchRepoSearch()
    ])
}