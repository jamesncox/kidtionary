import React from 'react'
import { connect } from 'react-redux'
import Definition from './Definition'
import { clearEverything, clearQuery } from './actions/word'
// import Audio from './Audio.js'

function Word(props) {

    const handleClear = () => {
        props.clearEverything()
        props.clearQuery()
    }

    const capitalize = (str) => {
        return str.toUpperCase();
    }

    return (
        <div className="word">
            <h3>{capitalize(props.query)}</h3>
            <button className="clear-button" onClick={handleClear}>Clear Info</button>
            <Definition />
        </div>
    )
}

const mapStateToProps = (state) => ({
    query: state.query.query,
    word: state.word.word
})

export default connect(mapStateToProps, { clearEverything, clearQuery })(Word)