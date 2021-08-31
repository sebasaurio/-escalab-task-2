import React,{useContext} from 'react'
import {Typography, Box} from '@material-ui/core'

import {MangaContext} from './../../contexts/MangaContext'

import DetailsManga from './detailsManga'

const ReadMangas = () => {
    const {toReadManga, handleToRemoveManga} = useContext(MangaContext)
    return (
        <Box mt={2}>
            {
                toReadManga.length > 0
                ? (
                    <>
                        <Typography align='center' gutterBottom variant='h5'>
                            Mangas saved for later reading
                        </Typography>
                        <DetailsManga mangas={toReadManga} format='list' action='delete' onClickEvent={handleToRemoveManga}/>
                    </>
                )
                : (
                    <Typography align='center' gutterBottom variant='h5'>No mangas selected</Typography>
                )
            }
        </Box>
    )
}

export default ReadMangas
