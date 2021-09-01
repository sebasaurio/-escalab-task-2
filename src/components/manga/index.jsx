import React,{useContext} from 'react'
import {Grid, Typography, Box, IconButton} from '@material-ui/core'

import {MangaContext} from './../../contexts/MangaContext'
import DetailsManga from './detailsManga'
import Loading from './../common/loading'

import {Replay} from '@material-ui/icons'

import './../../assets/styles/manga/index.css'

const HomeMangas = () => {

    const {doneFetchRandomManga, randomManga, handleToReadManga, handleGetRandomManga} = useContext(MangaContext)

    return (
        <div className='random'>
            <Box mt={2} className='title'>
                <Typography variant='h4' align='center' className='header-title' gutterBottom>Discover new mangas to read!</Typography>
                <Typography variant='h6' align='right' className='reload-title' gutterBottom>reload to get random mangas <Replay onClick={() => handleGetRandomManga()}/></Typography> 
            </Box>
            <Grid 
                container 
                direction="row" 
                justifyContent="center" 
                alignItems="center"
                className='random-mangas'>
                {
                    doneFetchRandomManga 
                    ? <DetailsManga mangas={randomManga} onClickEvent={handleToReadManga}/>
                    : <Loading text='we are selecting random mangas for you'/>
                }
            </Grid>
        </div>
    )
}

export default HomeMangas
