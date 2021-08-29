import React,{useContext} from 'react'
import {Grid} from '@material-ui/core'

import {MangaContext} from './../../contexts/MangaContext'
import DetailsManga from './detailsManga'
import Loading from './../common/loading'

import {Replay} from '@material-ui/icons'

import './../../assets/styles/manga/index.css'

const HomeMangas = () => {

    const {doneFetchRandomManga, randomManga, handleToReadManga} = useContext(MangaContext)

    return (
        <div className='random'>
            <div className='title'>
                <h2 className='header-title'>Discover new mangas to read!</h2>
                <h3 className='reload-title'>reload to get random mangas <Replay></Replay></h3> 
            </div>
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
