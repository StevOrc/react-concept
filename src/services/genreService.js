import http from './httpService';

export const getGenres = () => {
    return http.get("http://localhost:3900/api/genres");
}