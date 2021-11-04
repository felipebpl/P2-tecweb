
const API_KEY = "896c8566fc255f7c52f6ea6bd2901188";

const requests = {

    // REQUEST FILMES
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,


    // REQUEST TV SHOWS
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchDramaTV: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
    fetchActionTV: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
    fetchSciFiTV: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
    fetchMysteryTV: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
    fetchComedyTV: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
    fetchAnimationTV: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
    fetchWesternTV: `/discover/tv?api_key=${API_KEY}&with_genres=37`,
    fetchWarTV: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,



}

export default requests;