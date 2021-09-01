const BASE_URL = 'https://kitsu.io/api/edge/'

const MANGA = 'manga'
const TRENDING_MANGA_ENDPOINT = 'trending/manga'

const LIMIT = 10
const PAGE = 2
const PAGINATION = `page[limit]=${LIMIT}&page[offset]=${PAGE}`

export const getMangas = () => `${BASE_URL}${MANGA}?${PAGINATION}`
export const getNewestMangas= () => `${BASE_URL}${MANGA}?sort=-createdAt`
export const getTrendingMangas = () => `${BASE_URL}${TRENDING_MANGA_ENDPOINT}?${PAGINATION}`
export const getRandomMangas = (category) => `${BASE_URL}${MANGA}?filter[categories]=${category}` 

export const CATEGORIES = [
    'adventure',
    'middle-school',
    'Cycling',
    'elementary-school',
    'mermaid',
    'android',
    'all-girls-school',
    'vampire',
    'wrestling',
    'samurai',
    'elf',
    'pirate',
    'bishounen',
    'tentacle',
    'boxing',
    'musical-band',
    'cooking',
    'air-force',
    'bounty-hunter',
    'high-school',
    'delinquent',  
]