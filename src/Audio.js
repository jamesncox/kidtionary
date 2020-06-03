import React from 'react'
import { connect } from 'react-redux'

function Audio(props) {

    const checkForObjectKeys = () => {
        if (props.word) {
            let x = Object.values(props.word)[0]
            let y = Object.keys(x)
            return y.includes("meta")
        }
    }

    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")
        audioEl.play()
    }

    if (props.suggestions && checkForObjectKeys === true) {
        return (
            null
        )
    } else if (props.word) {
        return (
            <p className="audio-symbol">
                {'\uD83D\uDDE9'}
            </p>
        )
    } else {
        return null
    }
}

const mapStateToProps = (state) => ({
    word: state.word.word,
    isError: state.query.isError,
    suggestions: state.word.suggestions
})

export default connect(mapStateToProps)(Audio)