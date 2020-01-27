import { SELECT_COMMIT_START, SELECT_COMMIT_SUCCESS, SELECT_COMMIT_FAILURE } from "../actionTypes";

const initialState = {
    selectedCommitId: null,
    loading: false,
    commit: null,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_COMMIT_START: {
            const { selectedCommitId, loading } = action.payload;
            return {
                ...state,
                loading,
                selectedCommitId
            };
        }
        case SELECT_COMMIT_SUCCESS: {
            const { loading, commit } = action.payload;
            return {
                ...state,
                loading,
                commit
            };
        }
        case SELECT_COMMIT_FAILURE: {
            const { loading, error } = action.payload;
            return {
                ...state,
                loading,
                error
            };
        }
        default:
            return state;
    }
}
