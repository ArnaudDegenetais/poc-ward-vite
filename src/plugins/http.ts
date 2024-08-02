import axios from 'axios'

export const httpApim = axios.create({
    baseURL: import.meta.env.VITE_API_MANAGEMENT_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const httpBff = axios.create({
    baseURL: import.meta.env.VITE_BFF_URL,
    headers: {
        'Content-Type': 'application/json',
    },
})

export const setTokenHeader = (token: string) => {
    token !== null
        ? (httpApim.defaults.headers.common['Authorization'] =
              `Bearer ${token}`)
        : delete httpApim.defaults.headers.common['Authorization']
}

export default httpApim
