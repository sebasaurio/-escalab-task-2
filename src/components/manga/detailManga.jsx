import React from 'react'

import {Paper, Divider, Typography} from '@material-ui/core'
import {AddBox, Delete} from '@material-ui/icons'

import CustomButton from '../common/button'

import './../../assets/styles/manga/detail-manga.css'

const getAction = (type) => {
    const actions = {
        'delete': {
            icon: Delete,
            text: 'remove from list'
        },
        'add': {
            icon: AddBox,
            text: 'bookmark to read'
        },
        'default': {
            icon: AddBox,
            text: 'bookmark to read'
        },
    }

    return actions[type] || actions['default']
}

const DetailManga = ({manga, format, onClickEvent, action}) => {

    const selectedAction = getAction(action)
    const {attributes} = manga

    const {createdAt, updatedAt, titles, status, posterImage, chapterCount, volumneCount} = attributes
    const {medium} = posterImage

    return (
        <Paper
            className='detail-manga'
            variant="outlined" square
            >
            <div className='header-manga'>
                <Typography noWrap>
                    {
                        titles.en && <span className='en-title'>{titles.en}</span>
                    }
                    {
                        titles.en !== titles.en_jp && <span className='en-jp-tittle'>&nbsp;{titles.en_jp}</span>
                    }  
                </Typography>              
            </div>
            <div className='body-manga'>
                <div className='image-manga'>
                    <img src={medium} alt='manga'/>
                </div>
                <Divider/>
                <div className='description-manga'>
                    <span className='description-text'><strong>Created at:</strong> {createdAt.toString()}</span>
                    <span className='description-text'><strong>Last update:</strong> {updatedAt.toString()}</span>
                    <span className='description-text'><strong>Current status: </strong>{status.toUpperCase()}</span>
                    {chapterCount && <span className='description-text'><strong>Chapters:</strong> {chapterCount}</span>}
                    {volumneCount && <span className='description-text'><strong>Volums: </strong>{volumneCount}</span>}
                </div>
                <div className='actions-manga'>
                    <CustomButton 
                        icon={selectedAction.icon}
                        text={selectedAction.text} 
                        onClickEvent={onClickEvent}
                        data={manga}/>
                </div>
            </div>
        </Paper>
    )
}

export default DetailManga
