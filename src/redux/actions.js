import { listCommits } from '../api';
import {
  SEARCH_REPO_START,
  SEARCH_REPO_SUCCESS,
  SEARCH_REPO_FAILURE
} from "./actionTypes";

export const searchRepo = (user, repo) => {
  return dispatch => {
    dispatch(searchRepoStart());

    listCommits(user, repo).subscribe(
      res => {
        dispatch(searchRepoSuccess(res.data));
      },
      err => {
        dispatch(searchRepoFailure(err.message));
      },
      () => {
        console.log('LIST_COMMITS completed.');
      }
    );
  }
};

const searchRepoStart = () => ({
  type: SEARCH_REPO_START,
  payload:{
    loading: true
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
