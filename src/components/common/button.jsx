import React from 'react'

import {Button} from '@material-ui/core'

const CustomButton = ({text, icon, onClickEvent, data}) => (
    <Button onClick={() => onClickEvent(data)}>
        {text}
        {
            icon && React.createElement(icon)
        } 
    </Button>
)


export default CustomButton
