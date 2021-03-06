import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    SET_QUERY,
    CLEAR_SUGGESTION
} from './actionTypes'
import { getWord } from './actions/word'

class Query extends Component {

    state = {
        query: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        if (this.state.query === "") {
            e.preventDefault()
        } else {
            document.activeElement.blur()
            this.props.clearSuggestion()
            this.props.setQuery(this.state.query)
            this.props.getWord()
            this.setState({
                query: ""
            })
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input
                        className="searchbar"
                        type="text"
                        placeholder="Look up a word!"
                        name="query" value={this.state.query}
                        onChange={e => this.handleChange(e)}
                    />
                    <input
                        className="generate-button"
                        type="submit"
                        value="Search"
                    />
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => ({
    setQuery: (query) => dispatch({ type: SET_QUERY, payload: query }),
    getWord: () => dispatch(getWord()),
    clearSuggestion: () => dispatch({ type: CLEAR_SUGGESTION })
})

export default connect(null, mapDispatchToProps)(Query)