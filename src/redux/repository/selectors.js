import { createSelector } from 'reselect'


const getUser = (state) => state.searchReducer.user

const getRepo = (state) => state.searchReducer.repo

const getCommitList = (state) => state.searchReducer.commits

export const getLoadingState = (state) => state.searchReducer.loading;

export const getRepoState = createSelector(
  [getRepo],
  (repo) => repo
)

export const getCommitListState = createSelector(
  [getCommitList],
  (commits) => commits
)

export const getUserState = createSelector(
  [getUser],
  (user) => user
)