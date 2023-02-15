const router = require('express').Router();
require('dotenv').config();
const axios = require('axios');
const API_KEY = process.env.api_key;
const base_url = "https://api.themoviedb.org/3";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};

const movies = (word) => {
    // console.log(requests[word])
    return (axios.get(`${base_url}${requests[word]}`)
        .then(res => {
            console.log('hello');
            return res.data
        })
        .catch(error => console.log(error))
    );
}
router.get(`/api/:searchTerm`, async (req, res) => {
    try {
        res.json(await movies(req.params.searchTerm));
    } catch (err) {
        res.json(err);
    }
});
module.exports = router;
