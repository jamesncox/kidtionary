import {
    SET_WORD,
    CLEAR_WORD,
    CLEAR_EVERYTHING,
    CLEAR_SUGGESTION
} from '../actionTypes'

export default (state = { word: null, suggestions: null }, action) => {
    switch (action.type) {
        case SET_WORD:
            let x = Object.values(action.payload)[0]
            let y = Object.keys(x)
            if (y.includes("meta")) {
                return { ...state, word: action.payload }
            } else {
                return { ...state, word: null, suggestions: action.payload }
            }

        case CLEAR_WORD:
            return { ...state, word: null }

        case CLEAR_EVERYTHING:
            return { ...state, word: null, suggestions: null }

        case CLEAR_SUGGESTION:
            return { ...state, suggestions: null }

        default:
            return state
    }
}