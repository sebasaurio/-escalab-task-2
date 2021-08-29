import React from 'react'

import {Grid} from '@material-ui/core'

import DetailManga from './detailManga'

const DetailsManga = ({mangas, onClickEvent, format = 'card'}) => {
    return (
        <Grid container direction='row' justifyContent='space-around' alignItems='flex-start'>
            {
                mangas.map((manga) => (
                    <DetailManga
                        key={manga.id} 
                        manga={manga} 
                        format={format}
                        onClickEvent={onClickEvent}
                        />
                    ))
            }
        </Grid>
    )
}

export default DetailsManga
