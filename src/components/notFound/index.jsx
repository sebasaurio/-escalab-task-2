import React from 'react'
import {Link} from 'react-router-dom'
import {Grid,Box,Button} from '@material-ui/core'

import notFound from './../../assets/static/images/notfoundKurapika.jpg'

const NotFound = () => {
    return (
        <Grid 
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Box mt={3} mb={2}>
                <img src={notFound} alt="not found" width='512px' height='480px'/>
            </Box>
            <Link to='/'>
                <Button variant="contained">Go Home</Button>
            </Link>
            
        </Grid>
    )
}

export default NotFound
