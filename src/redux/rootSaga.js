
import { all } from 'redux-saga/effects';
import repoSagas from './repository/sagas';
import commitSagas from './commit/sagas';

export default function* rootSaga() {
    yield all([
        repoSagas(),
        commitSagas()
    ]);
};