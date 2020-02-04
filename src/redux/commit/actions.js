// import { throwError } from 'rxjs';
import { SELECT_COMMIT_FAILURE, SELECT_COMMIT_START, SELECT_COMMIT_SUCCESS } from "./types";

export const selectCommitStart = id => ({
    type: SELECT_COMMIT_START,
    payload: {
        selectedCommitId: id,
    }
});

export const selectCommitSuccess = data => ({
    type: SELECT_COMMIT_SUCCESS,
    payload: {
        commit: data
    }
});

export const selectCommitFailure = error => ({
    type: SELECT_COMMIT_FAILURE,
    payload: {
        error
    }
});