import http from './httpService';
import { apiUrl } from '../config.json';

const apiEndpoint = apiUrl + "movies"

export const getMovies = () => {
    return http.get(`${apiEndpoint}`);
}

export const deleteMovie = (idMovie) => {
    return http.delete(`${apiEndpoint}/${idMovie}`);
}