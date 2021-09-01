import React from 'react'
import {Container, Typography} from '@material-ui/core'

import './../../assets/styles/footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <Container>
                <Typography variant="h6" align="center" gutterBottom>
                    &copy; 2021, Sebastian Cardoza
                </Typography>
                <Typography  variant="h6" align="center" gutterBottom>
                    Tarea 2 Escalab &nbsp;-&nbsp; <a href="https://github.com/sebasaurio/escalab-task-2" target="_blank" rel="noopener noreferrer"> View Code</a>
                </Typography>
            </Container>
        </footer>
    )
}

export default Footer
 