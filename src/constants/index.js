const BASE_URL = 'https://kitsu.io/api/edge/'

const CATEGORIES_ENDPOINT = 'categories'
const MANGA = 'manga'

const TRENDING_MANGA_ENDPOINT = 'trending/manga'
const TRENDING_ANIME_ENDPOINT = 'trending/anime'

const LIMIT = 20
const PAGE = 0
const PAGINATION = `?page[limit]=${LIMIT}&page[offset]=${PAGE}`

export const getMangas = () => `${BASE_URL}${MANGA}${PAGINATION}`
export const getTrendingMangas = () => `${BASE_URL}${TRENDING_MANGA_ENDPOINT}${PAGINATION}`