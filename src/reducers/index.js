import { combineReducers } from 'redux'
import word from '../reducers/word'
import query from '../reducers/query'

const rootReducer = combineReducers(
    {
        word,
        query
    }
)

export default rootReducer