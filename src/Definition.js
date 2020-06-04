import React from 'react'
import { connect } from 'react-redux'
import SuggestedQuery from './SuggestedQuery'
import { clearWord, clearQuery } from './actions/word'
// import Speech from 'react-speech'

function Definition(props) {

    const checkForObjectKeys = () => {
        if (props.word) {
            let x = Object.values(props.word)[0]
            let y = Object.keys(x)
            return y.includes("meta")
        }
    }

    const handleMoreOptions = () => {
        props.clearWord()
        props.clearQuery()
        return (
            <SuggestedQuery />
        )
    }

    const mapDefinitions = () => {

        let color
        let noun = "#2ECC71"
        let verb = "#1e90ff"
        let adjective = "#F39C12"
        let pronoun = "#E74C3C"
        let abbreviation = "#C71585"
        let preposition = "#7FFFD4"
        let adverb = "#EE82EE"
        let prefix = "#00FFFF"
        let geographicalName = "#FFF0F5"
        let conjunction = "#BA55D3"
        let adjectiveSuffix = "#98FB98"
        let adverbSuffix = "#DDA0DD"
        let verbSuffix = "#FA8072"
        let nounSuffix = "#40E0D0"
        let verbOrAdjectiveSuffix = "#DB7093"
        let interjection = "#FFFF00"
        let unknown = "#FFFFF0"

        if (props.word) {
            return (
                props.word.map(def => {
                    if (def.fl === "noun") {
                        color = noun
                    } else if (def.fl === "verb") {
                        color = verb
                    } else if (def.fl === "adjective") {
                        color = adjective
                    } else if (def.fl === "abbreviation") {
                        color = abbreviation
                    } else if (def.fl === "preposition") {
                        color = preposition
                    } else if (def.fl === "adverb") {
                        color = adverb
                    } else if (def.fl === "pronoun") {
                        color = pronoun
                    } else if (def.fl === "prefix") {
                        color = prefix
                    } else if (def.fl === "geographical name") {
                        color = geographicalName
                    } else if (def.fl === "noun suffix") {
                        color = nounSuffix
                    } else if (def.fl === "conjunction") {
                        color = conjunction
                    } else if (def.fl === "interjection") {
                        color = interjection
                    } else if (def.fl === "adjective suffix") {
                        color = adjectiveSuffix
                    } else if (def.fl === "adverb suffix") {
                        color = verbSuffix
                    } else if (def.fl === "verb suffix") {
                        color = adverbSuffix
                    } else if (def.fl === "verb suffix or adjective suffix") {
                        color = verbOrAdjectiveSuffix
                    } else {
                        color = unknown
                    }

                    return (
                        def.shortdef.map((shortdefArray, index) => {
                            return (
                                <div
                                    className="word-card"
                                    style={{ backgroundColor: color }}
                                    key={props.word.id + index.toString()}>

                                    {/* <Speech
                                        text={shortdefArray}
                                        pitch="0.7"
                                        rate="0.8"
                                        lang="en-GB"
                                        voice="Daniel"
                                        textAsButton={true}
                                        displayText={'\ud83d\udde3'}
                                    >
                                    </Speech> */}
                                    {/* {' '} */}
                                    <strong>
                                        {def.fl}
                                    </strong>
                                    : {shortdefArray}
                                </div>
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
                <div className="definition-grid">
                    {mapDefinitions()}
                </div>
            </>
        )
    } else {
        return (
            <div className="definition-grid">
                {mapDefinitions()}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    word: state.word.word,
    isError: state.query.isError,
    suggestions: state.word.suggestions
})

export default connect(mapStateToProps, { clearWord, clearQuery })(Definition)