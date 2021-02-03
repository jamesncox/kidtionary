import {
    SET_WORD,
    CLEAR_WORD,
    CLEAR_QUERY,
    IS_ERROR,
    CLEAR_EVERYTHING
} from '../actionTypes'

const setWord = word => {
    return { type: SET_WORD, payload: word }
}

export const clearWord = () => {
    return { type: CLEAR_WORD }
}

export const clearQuery = () => {
    return { type: CLEAR_QUERY }
}

export const clearEverything = () => {
    return { type: CLEAR_EVERYTHING }
}

const raiseError = () => {
    return { type: IS_ERROR }
}

export const getWord = () => {
    return async (dispatch, getState) => {
        const state = getState()

        const query = state.query.query
        try {
            const res = await fetch(`https://dictionaryapi.com/api/v3/references/sd2/json/${query}?key=01350b9d-a8fd-43a3-9832-31da92542dfe`)
            if (!res.ok) {
                throw res
            }
            const word = await res.json()
            dispatch(setWord(word))
        } catch (err) {
            dispatch(raiseError())
        }
    }
}