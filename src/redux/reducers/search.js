import { SEARCH_REPO_START, SEARCH_REPO_SUCCESS, SEARCH_REPO_FAILURE } from "../actionTypes";

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
      const { loading, user, repo } = action.payload;
      return {
        ...state,
        loading: loading,
        user: user,
        repo: repo
      };
    }
    case SEARCH_REPO_SUCCESS: {
      const { loading, commits } = action.payload;
      return {
        ...state,
        loading: loading,
        commits: commits
      };
    }
    case SEARCH_REPO_FAILURE: {
      const { loading, error } = action.payload;
      return {
        ...state,
        loading: loading,
        error: error
      };
    }
    default:
      return state;
  }
}
