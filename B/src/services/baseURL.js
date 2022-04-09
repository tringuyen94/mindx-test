import axios from 'axios'

const API_BASE = 'https://api.shrtco.de/v2/'

const restConnector = axios.create({
   baseURL: API_BASE
})

export default restConnector