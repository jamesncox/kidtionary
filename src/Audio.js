import React from 'react'
import { connect } from 'react-redux'

function Audio(props) {

    const playAudio = () => {
        const audioEl = document.getElementsByClassName("audio-element")[0]
        audioEl.play()
    }

    // check to see if a word has an MP3 under the "sound" property
    const checkForSoundProp = () => {
        if (props.word) {
            let x = Object.values(props.word)[0]
            let y = Object.values(x)

            if (Object.keys(x).includes("history")) {
                return Object.keys(y[1].prs[0]).includes("sound")
            } else if (Object.keys(x).includes("hom")) {
                return Object.keys(y[2].prs[0]).includes("sound")
            } else {
                return Object.keys(y[1].prs[0]).includes("sound")
            }
        }
    }

    if (props.word && checkForSoundProp() === true) {
        const audioRef = props.word[0].hwi.prs[0].sound.audio
        return (
            <p className="audio-symbol" onClick={() => playAudio()}>
                <audio className="audio-element" key={audioRef}>
                    <source src={`https://media.merriam-webster.com/audio/prons/en/us/mp3/${audioRef.slice(0, 1)}/${audioRef}.mp3`}></source>
                </audio>
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