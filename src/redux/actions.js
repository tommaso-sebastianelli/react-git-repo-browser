// import {delay} from 'rxjs/operators';
import { listCommits } from '../api';
import {
  SEARCH_REPO_START,
  SEARCH_REPO_SUCCESS,
  SEARCH_REPO_FAILURE
} from "./actionTypes";


export const searchRepo = (user, repo) => {
  return dispatch => {
    console.log('search dispatched');
    dispatch(searchRepoStart(user, repo));

    listCommits(user, repo)
    // .pipe(
    //   delay(3000)
    // )
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
  payload:{
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
