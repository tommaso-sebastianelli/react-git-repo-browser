// import { throwError } from 'rxjs';
import { delay/*, mergeMap*/ } from 'rxjs/operators';
// import { listCommits, getCommit } from '../api.mock';
import { listCommits, getCommit } from '../api';
import {
  SEARCH_REPO_START,
  SEARCH_REPO_SUCCESS,
  SEARCH_REPO_FAILURE,
  SELECT_COMMIT_START,
  SELECT_COMMIT_SUCCESS,
  SELECT_COMMIT_FAILURE
} from "./actionTypes";


export const searchRepo = (user, repo) => {
  return dispatch => {
    console.log('search dispatched');
    dispatch(searchRepoStart(user, repo));

    listCommits(user, repo)
      .pipe(
        // mergeMap(()=> throwError(new Error('test'))),
        // delay(2000)
      )
      .subscribe(
        res => {
          console.log('LIST_COMMITS success.');
          dispatch(searchRepoSuccess(res.data));
        },
        err => {
          console.log('LIST_COMMITS failure.');
          dispatch(searchRepoFailure(err.message));
        },
        () => {
          console.log('LIST_COMMITS completed.');
        }
      );
  }
};

const searchRepoStart = (user, repo) => ({
  type: SEARCH_REPO_START,
  payload: {
    loading: true,
    user,
    repo
  }
});

const searchRepoSuccess = data => ({
  type: SEARCH_REPO_SUCCESS,
  payload: {
    commits: data,
    loading: false
  }
});

const searchRepoFailure = error => ({
  type: SEARCH_REPO_FAILURE,
  payload: {
    error,
    loading: false
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

const selectCommitStart = id => ({
  type: SELECT_COMMIT_START,
  payload: {
    selectedCommitId: id,
    loading: true
  }
});

const selectCommitSuccess = data => ({
  type: SELECT_COMMIT_SUCCESS,
  payload: {
    commit: data,
    loading: false
  }
});

const selectCommitFailure = error => ({
  type: SELECT_COMMIT_FAILURE,
  payload: {
    error,
    loading: false
  }
});


