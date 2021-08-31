import React, {useContext} from 'react'

import {Typography, Box} from '@material-ui/core'

import {MangaContext} from './../../contexts/MangaContext'
import DetailsManga from './detailsManga'
import Loading from './../common/loading'


const TopMangas = () => {

    const {doneFetchTrendingManga, trendingManga,handleToReadManga} = useContext(MangaContext)

    return (
        <Box mt={2}>
            {
                doneFetchTrendingManga
                ? (
                    <>
                        <Typography align='center' gutterBottom variant='h5'>
                            Top mangas read by the community
                        </Typography>
                        <DetailsManga mangas={trendingManga} format='list' onClickEvent={handleToReadManga}/>
                    </>
                    
                )
                : <Loading/>
            }
        </Box>
    )
}

export default TopMangas
