import {
    SET_QUERY,
    CLEAR_QUERY,
    IS_ERROR
} from '../actionTypes'

export default (state = { query: "", isError: false }, action) => {
    switch (action.type) {
        case SET_QUERY:
            return { ...state, query: action.payload }

        case CLEAR_QUERY:
            return { ...state, query: "" }

        case IS_ERROR:
            return { ...state, isError: true }

        default:
            return state
    }
}