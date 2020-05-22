import React from 'react'
import { connect } from 'react-redux'
import { SET_QUERY } from './actionTypes'
import { getWord } from './actions/word'

function SuggestedQuery(props) {

    const handleClick = (suggestion) => {
        props.setQuery(suggestion)
        props.getWord()
    }

    const mapSuggestions = () => {
        return (
            props.suggestions.map((suggestion, index) => {
                return (
                    <button
                        className="suggestion-button"
                        key={index}
                        id={index}
                        onClick={() => handleClick(suggestion, index)}
                    >
                        {suggestion}
                    </button>
                )
            })
        )
    }

    return (
        <div className="grid">
            <p>Did you mean</p>
            {mapSuggestions()}
        </div>
    )
}

const mapStateToProps = (state) => ({
    suggestions: state.word.suggestions
})

const mapDispatchToProps = (dispatch) => ({
    setQuery: (query) => dispatch({ type: SET_QUERY, payload: query }),
    getWord: () => dispatch(getWord())
})

export default connect(mapStateToProps, mapDispatchToProps)(SuggestedQuery)