import { SEARCH_REPO } from "../actionTypes";

const initialState = {
  user:'',
  repo: ''
};

export default function(state = initialState, action) {
  switch (action.type) {
    case SEARCH_REPO: {
      const { user, repo } = action.payload;
      return {
        ...state,
        user,
        repo
      };
    }
    default:
      return state;
  }
}
