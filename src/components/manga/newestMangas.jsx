import React, {useContext} from 'react'
import {Typography, Box} from '@material-ui/core'

import {MangaContext} from './../../contexts/MangaContext'

import DetailsManga from './detailsManga'
import Loading from '../common/loading'

const NewestMangas = () => {

    const {doneFetchNewestManga, newestManga,handleToReadManga} = useContext(MangaContext)

    return (
        <Box mt={2}>
            {
                doneFetchNewestManga
                ? (
                    <>
                        <Typography align='center' gutterBottom variant='h5'>
                            New mangas published
                        </Typography>
                        <DetailsManga mangas={newestManga} format='list' onClickEvent={handleToReadManga}/>
                    </>
                )
                : <Loading/>
            }
        </Box>
    )
}

export default NewestMangas
