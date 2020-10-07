import http from './httpService';

const apiEndpoint = "http://localhost:3900/api/movies"

export const getMovies = () => {
    return http.get(apiEndpoint);
}

export const deleteMovie = (idMovie) => {
    return http.delete(`${apiEndpoint}/${idMovie}`);
}