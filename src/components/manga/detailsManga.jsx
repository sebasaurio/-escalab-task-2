import React from 'react'

import {GridList, GridListTile} from '@material-ui/core'

import DetailManga from './detailManga'

const DetailsManga = ({mangas, onClickEvent, format = 'card', action}) => {
    return (
        <GridList className='list-manga' 
            cols={2}
            cellHeight='auto'
            spacing={20}
        >
            {
                mangas.map((manga) => (
                    <GridListTile key={manga.id} 
                        cols={1}
                        rows={2}
                        >
                        <DetailManga
                            key={manga.id} 
                            manga={manga} 
                            format={format}
                            action={action}
                            onClickEvent={onClickEvent}
                            />
                        ))
                    </GridListTile>
                ))    
            }
        </GridList>
    )
}

export default DetailsManga
