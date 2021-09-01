import React from 'react'
import {CircularProgress} from '@material-ui/core'

import './../../assets/styles/loading.css'

const Loading = ({text}) => (
    <div className='loading'>
        {
            text && <h2>{text}</h2>
        }
        <CircularProgress></CircularProgress>
    </div>
)

export default Loading
