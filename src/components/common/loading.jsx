import React from 'react'
import {CircularProgress} from '@material-ui/core'

const Loading = ({text}) => (
    <div>
        {
            text && <h2>{text}</h2>
        }
        <CircularProgress></CircularProgress>
    </div>
)

export default Loading
