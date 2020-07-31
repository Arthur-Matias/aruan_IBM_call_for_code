import axios from 'axios';

const api = axios.create({
    baseURL: 'https://62aae0b11245.ngrok.io'
})

export default api;