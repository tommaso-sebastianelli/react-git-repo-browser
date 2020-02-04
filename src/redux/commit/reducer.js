import { SELECT_COMMIT_FAILURE, SELECT_COMMIT_START, SELECT_COMMIT_SUCCESS } from "./types";

const initialState = {
    selectedCommitId: null,
    loading: false,
    commit: null,
    error: null
};

export default function (state = initialState, action) {
    switch (action.type) {
        case SELECT_COMMIT_START: {
            const { selectedCommitId } = action.payload;
            return {
                ...state,
                loading: true,
                selectedCommitId
            };
        }
        case SELECT_COMMIT_SUCCESS: {
            const { commit } = action.payload;
            return {
                ...state,
                loading: false,
                commit
            };
        }
        case SELECT_COMMIT_FAILURE: {
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
