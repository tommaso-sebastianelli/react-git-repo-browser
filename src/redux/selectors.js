import { createSelector } from 'reselect'

// selector
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