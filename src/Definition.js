import React from 'react'
import { connect } from 'react-redux'
import SuggestedQuery from './SuggestedQuery'
import { clearWord, clearQuery } from './actions/word'

function Definition(props) {

    const checkForObjectKeys = () => {
        if (props.word) {
            let x = Object.values(props.word)[0]
            let y = Object.keys(x)
            return y.includes("meta")
        }
    }

    const handleMoreOptions = () => {
        console.log("inside see other suggestions")
        props.clearWord()
        props.clearQuery()
        return (
            <SuggestedQuery />
        )
    }

    const mapDefinitions = () => {
        if (props.word) {
            return (
                props.word.map(def => {
                    return (
                        def.shortdef.map((shortdefArray, index) => {
                            return (
                                <ul
                                    key={props.word.id + index.toString()}>
                                    <strong>
                                        {def.fl}
                                    </strong>
                  : {shortdefArray}
                                </ul>
                            )
                        })
                    )
                })
            )
        } else if (props.suggestions) {
            props.clearQuery()
            return (
                <SuggestedQuery />
            )
        } else {
            return null
        }
    }

    if (props.suggestions && checkForObjectKeys() === true) {
        return (
            <>
                <button
                    className="clear-button"
                    onClick={handleMoreOptions}
                >
                    See other suggestions
                </button>
                {mapDefinitions()}
            </>
        )
    } else {
        return (
            <>
                {mapDefinitions()}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    word: state.word.word,
    isError: state.query.isError,
    suggestions: state.word.suggestions
})

export default connect(mapStateToProps, { clearWord, clearQuery })(Definition)