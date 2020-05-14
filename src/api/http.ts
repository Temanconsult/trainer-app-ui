import axios from 'axios';
import CookieService from '../services/CookieService';

const { REACT_APP_HOST_URL, REACT_APP_REQUEST_TIMEOUT } = process.env;
const httpClient = axios.create({
    baseURL: REACT_APP_HOST_URL,
    timeout: Number(REACT_APP_REQUEST_TIMEOUT) || 10 * 60 * 1000,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${CookieService.getCookie('token')}`
    }
});

export default httpClient;
