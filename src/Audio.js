import React, { Component } from 'react'
import { connect } from 'react-redux'

class Audio extends Component {

    // checkForObjectKeys = () => {
    //     if (this.props.word) {
    //         let x = Object.values(this.props.word)[0]
    //         let y = Object.keys(x)
    //         return y.includes("meta")
    //     }
    // }

    // checkForMP3 = () => {
    //     if (this.props.word) {
    //         let audioRef = this.props.word[0].hwi.prs[0].sound.audio
    //         if (audioRef === undefined) {
    //             return true
    //         }
    //     }
    // }

    playAudio = () => {
        // something needs to put in here to reset the element with each new word
        const audioEl = document.getElementsByClassName("audio-element")[0]
        console.log(audioEl)
        audioEl.play()
    }

    render() {
        const checkForObjectKeys = () => {
            if (this.props.word) {
                let x = Object.values(this.props.word)[0]
                let y = Object.keys(x)
                return y.includes("meta")
            }
        }

        // not sure if checkForMP3 is actually working
        const checkForMP3 = () => {
            if (this.props.word) {
                let audioRef = this.props.word[0].hwi.prs[0].sound.audio
                if (audioRef === undefined) {
                    return true
                }
            }
        }

        if (this.props.suggestions && checkForObjectKeys() === true) {
            return (
                null
            )
        } else if (this.props.word) {
            // not correctly filtering out the undefined audioRef words
            const audioRef = this.props.word[0].hwi.prs[0].sound.audio
            return (
                <p className="audio-symbol" onClick={() => this.playAudio()}>
                    <audio className="audio-element">
                        <source src={`https://media.merriam-webster.com/audio/prons/en/us/mp3/${audioRef.slice(0, 1)}/${audioRef}.mp3`}></source>
                    </audio>
                    {'\uD83D\uDDE9'}
                </p>
            )
        } else {
            return null
        }
    }
}

const mapStateToProps = (state) => ({
    word: state.word.word,
    isError: state.query.isError,
    suggestions: state.word.suggestions
})

export default connect(mapStateToProps)(Audio)