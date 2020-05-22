import React from 'react'
import { connect } from 'react-redux'
import SuggestedQuery from './SuggestedQuery'

function Definition(props) {

    const checkForObjectKeys = () => {
        if (props.word) {
            let x = Object.values(props.word)[0]
            let y = Object.keys(x)
            return y.includes("meta")
        }
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
                <button className="clear-button">See other suggestions</button>
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

export default connect(mapStateToProps)(Definition)