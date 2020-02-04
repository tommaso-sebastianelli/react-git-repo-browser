import { createSelector } from 'reselect'

const getSelectedCommit = (state) => state.commitReducer.commit
export const getSelectedCommitState = createSelector(
    [getSelectedCommit],
    (commit) => commit
)

export const getLoadingState = (state) => state.searchReducer.loading;
