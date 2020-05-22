import React from 'react'
import { connect } from 'react-redux'
import { getWord } from './actions/word'
import Word from './Word'
import Query from './Query'

function Container(props) {

    return (
        <div>
            <Query />
            <Word />
        </div>
    )
}

export default connect(null, { getWord })(Container)