import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
})

export default instance;

//https://api.themoviedb.org/3/trending/all/week?api_key=$7d9f53b4fc8a2d32eab414027d67a61c&with_networks=213