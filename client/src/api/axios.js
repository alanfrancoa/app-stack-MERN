import axios from "axios"

const instance = axios.create({
    baseURL: 'https://app-stack-mern-production.up.railway.app/api',
    withCredentials: true
})

export default instance