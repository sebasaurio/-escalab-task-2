import React, {useContext} from 'react'

import {Grid} from '@material-ui/core'

import {MangaContext} from './../../contexts/MangaContext'
import DetailsManga from './detailsManga'
import Loading from './../common/loading'


const TopMangas = () => {

    const {doneFetchTrendingManga, trendingManga} = useContext(MangaContext)

    return (
        <div>
            {
                doneFetchTrendingManga
                ? <DetailsManga mangas={trendingManga} format='list'/>
                : <Loading/>
            }
        </div>
    )
}

export default TopMangas
