import React, {useContext} from 'react'
import {Grid} from '@material-ui/core'

import {MangaContext} from './../../contexts/MangaContext'

import DetailsManga from './detailsManga'
import Loading from '../common/loading'

const NewestMangas = () => {

    const {doneFetchNewestManga, newestManga} = useContext(MangaContext)

    return (
        <div>
            {
                doneFetchNewestManga
                ? <DetailsManga mangas={newestManga} format='list'/>
                : <Loading/>
            }
        </div>
    )
}

export default NewestMangas
