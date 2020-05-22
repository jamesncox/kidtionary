import React from 'react'
import { connect } from 'react-redux'
import Definition from './Definition'
import { clearWord, clearQuery } from './actions/word'

function Word(props) {

    const handleClear = () => {
        props.clearWord()
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
    query: state.query.query
})

export default connect(mapStateToProps, { clearWord, clearQuery })(Word)