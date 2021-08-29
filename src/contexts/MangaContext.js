import React, {createContext, useState, useEffect} from 'react'

import {getMangas, getTrendingMangas} from './../constants/index'

export const MangaContext = createContext()

const MangaContextProvider = ({children}) => {

    const [doneFetchRandomManga, setDoneFetchRandomManga] = useState(false)
    const [randomManga, setRandomManga] = useState([])

    const [doneFetchTrendingManga, setDoneFetchTrendingManga] = useState(false)
    const [trendingManga, setTrendingManga] = useState([])

    const [doneFetchNewestManga, setDoneFetchNewestManga] = useState(false)
    const [newestManga, setNewestManga] = useState([])

    const [toReadManga, setToReadManga] = useState([])

    useEffect(() => {
        getRandomManga()
    },[])

    useEffect(() => {
        getTrendingManga()
    },[])

    useEffect(() => {
        getNewestManga()
    },[])

    const handleToReadManga = (manga) => {
        console.log(manga)
        setToReadManga([...toReadManga, manga])
        console.log(toReadManga)
    }

    const getRandomManga = async () => {
        try {           
            const response = await fetch(getMangas(), {
                method: 'GET'
            })
            const data = await response.json()
            setDoneFetchRandomManga(true)
            setRandomManga(data?.data)
        } catch (error) {
            console.log(error)
        }
    }

    const getTrendingManga = async () => {
        try {
            const response = await fetch(getTrendingMangas(),{
                method: 'GET'
            })
            const data = await response.json()
            setDoneFetchTrendingManga(true)
            setTrendingManga(data?.data)

        } catch (error) {
            console.log(error)
        }
    }

    const getNewestManga = async () => {
        try {
            const response = await fetch(getMangas(),{
                method: 'GET'
            })
            const data = await response.json()
            setDoneFetchNewestManga(true)
            setNewestManga(data?.data)

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <MangaContext.Provider value={
            {
                doneFetchRandomManga, 
                randomManga, 
                doneFetchTrendingManga, 
                trendingManga,
                doneFetchNewestManga,
                newestManga,
                toReadManga,
                handleToReadManga
            }}>
            {children}
        </MangaContext.Provider>
    )
}

export default MangaContextProvider