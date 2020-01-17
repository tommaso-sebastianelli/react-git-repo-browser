import { SEARCH_REPO } from "./actionTypes";

export const searchRepo = (user, repo) => ({
  type: SEARCH_REPO,
  payload: {
    user,
    repo
  }
});

