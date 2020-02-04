import { SEARCH_REPO_FAILURE, SEARCH_REPO_START, SEARCH_REPO_SUCCESS } from "./types";

const initialState = {
  user: '',
  repo: '',
  loading: false,
  commits: [],
  error: null
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPO_START: {
      const { user, repo } = action.payload;
      return {
        ...state,
        loading: true,
        user: user,
        repo: repo
      };
    }
    case SEARCH_REPO_SUCCESS: {
      const { commits } = action.payload;
      return {
        ...state,
        loading: false,
        commits: commits
      };
    }
    case SEARCH_REPO_FAILURE: {
      const { error } = action.payload;
      return {
        ...state,
        loading: false,
        error
      };
    }
    default:
      return state;
  }
}
