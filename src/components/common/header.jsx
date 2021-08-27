import React from 'react'
import {Link} from 'react-router-dom'
import {AppBar, Toolbar, Button} from '@material-ui/core'

import logo from './../../assets/static/images/logo.png'
import './../../assets/styles/header.css'

const Header = () => (   
    <AppBar position='sticky' className='header-options'>
        <Toolbar>
            <Link to='/' className='header-option'> <Button color="inherit">Home</Button> </Link>
            <Link to='/top' className='header-option'> <Button color="inherit">Top</Button> </Link>
            <Link to='/newest' className='header-option'> <Button color="inherit">Newest</Button> </Link>
        </Toolbar>
    </AppBar>  
)

export default Header
