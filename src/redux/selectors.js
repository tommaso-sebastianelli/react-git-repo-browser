import { createSelector } from 'reselect'

const getCommitList = (state) => state.commits
export const getCommitListState = createSelector(
  [ getCommitList ],
  (commits) => commits
)

export const getLoadingState = (state) => state.loading;

const getUser = (state) => state.user
export const getUserState = createSelector(
  [ getUser ],
  (user) => user
)

const getRepo = (state) => state.repo
export const getRepoState = createSelector(
  [ getRepo ],
  (repo) => repo
)

const getSelectedCommit = (state) => state.commit
export const getSelectedCommitState = createSelector(
  [ getSelectedCommit ],
  (commit) => commit
)

