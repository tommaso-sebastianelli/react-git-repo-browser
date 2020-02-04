
import { all } from 'redux-saga/effects';
import repoSagas from './repository/sagas';
import commitSagas from './commit/sagas';

const sagas = function* combineSagas(){
    yield all(repoSagas, commitSagas);
}

export default sagas;