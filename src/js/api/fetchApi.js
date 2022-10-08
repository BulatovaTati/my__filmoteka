import axios from 'axios';

const API_KEY = 'f3b7458c34b3a95455ce5f7edb53b2eb';
const BASE_URL = 'https://api.themoviedb.org/3';


export default class FetchMoviApi {
    
    // Отримую популярні фільми
    async getPopularData() {
        try {
            const response = await axios.get(`${BASE_URL}/trending/movie/day?api_key=${API_KEY}`);
            const data = await response.data;
            console.log(data);
            return response.data;
        } catch (error) {
            console.error('Smth wrong with api get full trends' + error);
        }
        
    }

    // Запит по назві фільму
    
    
    async fetchMovieSearcher(text) {
        try {
            const response = await axios.get(
                `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${text}`);
            console.log(response.data);
            return response.data;
        } catch (error) {
            console.error('Smth wrong with api search fetch' + error);
        }
    }
};