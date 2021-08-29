import React from 'react'

import {Paper} from '@material-ui/core'
import {AddBox} from '@material-ui/icons'

import CustomButton from '../common/button'

import './../../assets/styles/manga/detail-manga.css'

const DetailManga = ({manga, format, onClickEvent}) => {

    const {attributes} = manga

    const {createdAt, updatedAt, titles, status, posterImage, chapterCount, volumneCount} = attributes
    const {medium} = posterImage

    return (
        <Paper 
            elevation={2}
            className='detail-manga'
            variant="outlined"
            >
            <div className='header-manga'>
                {
                    titles.en && <span className='en-title'>{titles.en}</span>
                }
                {
                    titles.en !== titles.en_jp && <span className='en-jp-tittle'>&nbsp;{titles.en_jp}</span>
                }                
            </div>
            <div className='body-manga'>
                <div className='image-manga'>
                    <img src={medium} alt='manga'/>
                </div>
                <div className='description-manga'>
                    <span className='description-text'><strong>Created at:</strong> {createdAt.toString()}</span>
                    <span className='description-text'><strong>Last update:</strong> {updatedAt.toString()}</span>
                    <span className='description-text'><strong>Current status: </strong>{status.toUpperCase()}</span>
                    {chapterCount && <span className='description-text'><strong>Chapters:</strong> {chapterCount}</span>}
                    {volumneCount && <span className='description-text'><strong>Volums: </strong>{volumneCount}</span>}
                </div>
                <div className='actions-manga'>
                    <CustomButton icon={AddBox} text='bookmark to read' onClickEvent={onClickEvent} data={manga}/>
                </div>
            </div>
        </Paper>
    )
}

export default DetailManga
