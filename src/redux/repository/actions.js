// import { throwError } from 'rxjs';
// import { listCommits, getCommit } from '../api.mock';
import { SEARCH_REPO_FAILURE, SEARCH_REPO_START, SEARCH_REPO_SUCCESS } from "./types";


export const searchRepoStart = (user, repo) => ({
  type: SEARCH_REPO_START,
  payload: {
    user,
    repo
  }
});

export const searchRepoSuccess = data => ({
  type: SEARCH_REPO_SUCCESS,
  payload: {
    commits: data
  }
});

export const searchRepoFailure = error => ({
  type: SEARCH_REPO_FAILURE,
  payload: {
    error
  }
});

