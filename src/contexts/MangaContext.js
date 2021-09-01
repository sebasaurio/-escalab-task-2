import React, {createContext, useState, useEffect} from 'react'

import {getNewestMangas, getTrendingMangas, getRandomMangas, CATEGORIES} from './../constants/index'

export const MangaContext = createContext()

const MangaContextProvider = ({children}) => {

    const [doneFetchRandomManga, setDoneFetchRandomManga] = useState(false)
    const [randomManga, setRandomManga] = useState([])

    const [doneFetchTrendingManga, setDoneFetchTrendingManga] = useState(false)
    const [trendingManga, setTrendingManga] = useState([])

    const [doneFetchNewestManga, setDoneFetchNewestManga] = useState(false)
    const [newestManga, setNewestManga] = useState([])

    const [toReadManga, setToReadManga] = useState([])

    //TODO: Llamar use effect cuando cambie la ruta, si encuentran info o me ayudan con este seria genial! gracias!
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
        setToReadManga([...new Set([...toReadManga, manga])])
    }

    const handleToRemoveManga = (removedManga) => {
        setToReadManga([...new Set(toReadManga.filter(manga => manga.id !== removedManga.id))])
    }

    const handleGetRandomManga =() => {
        setDoneFetchRandomManga(false)
        getRandomManga()
    } 

    const getRandomManga = async () => {
        try {
            const pickedCategory = CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)]
            const response = await fetch(getRandomMangas(pickedCategory), {
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
            const response = await fetch(getNewestMangas(),{
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
                handleToReadManga,
                handleToRemoveManga,
                handleGetRandomManga
            }}>
            {children}
        </MangaContext.Provider>
    )
}

export default MangaContextProvider