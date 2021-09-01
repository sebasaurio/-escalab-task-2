import React from 'react'

import {GridList, GridListTile} from '@material-ui/core'

import DetailManga from './detailManga'

const DetailsManga = ({mangas, onClickEvent, action}) => {
    return (
        <GridList className='list-manga' 
            cols={mangas.length === 1 ? 1 : 2}
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
