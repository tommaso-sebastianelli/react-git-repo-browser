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
            const { id, loading } = action.payload;
            return {
                ...state,
                loading: loading,
                selectedCommitId: id
            };
        }
        case SELECT_COMMIT_SUCCESS: {
            const { loading, data } = action.payload;
            return {
                ...state,
                loading: loading,
                commit: data
            };
        }
        case SELECT_COMMIT_FAILURE: {
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
