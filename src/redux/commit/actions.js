// import { throwError } from 'rxjs';
import { delay /*, mergeMap*/ } from 'rxjs/operators';
// import { listCommits, getCommit } from '../api.mock';
import { getCommit } from '../../api';
import { SELECT_COMMIT_FAILURE, SELECT_COMMIT_START, SELECT_COMMIT_SUCCESS } from "./types";

const selectCommitStart = id => ({
    type: SELECT_COMMIT_START,
    payload: {
        selectedCommitId: id,
    }
});

const selectCommitSuccess = data => ({
    type: SELECT_COMMIT_SUCCESS,
    payload: {
        commit: data
    }
});

const selectCommitFailure = error => ({
    type: SELECT_COMMIT_FAILURE,
    payload: {
        error
    }
});

export const selectCommit = (user, repo, id) => {
    return dispatch => {
        console.log('SELECT_COMMIT started.');
        dispatch(selectCommitStart(id));

        getCommit(user, repo, id)
            .pipe(
                delay(200)
            )
            .subscribe(
                res => {
                    console.log('SELECT_COMMIT success.');
                    console.log(res);
                    dispatch(selectCommitSuccess(res.data));
                },
                err => {
                    console.log('SELECT_COMMIT failure.');
                    dispatch(selectCommitFailure(err.message));
                    console.error(err);
                },
                () => {
                    console.log('SELECT_COMMIT completed.');
                }
            );
    }
};