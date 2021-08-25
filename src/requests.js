const apikey="d52427aedbce4f0f166f41134c6d0a70";
const requests={
    fetchTrending:`/trending/all/week?api_key=${apikey}&language=en-US`,
    fetchNetflixOriginals:`/discover/tv?api_key=${apikey}&with_networks=213`,
    fetchtoprated:`/movie/top_rated?api_key=${apikey}&language=en-US`,
    fetchActionMovies:`/discover/movie?api_key=${apikey}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${apikey}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${apikey}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${apikey}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${apikey}&with_genres=99`,
}

export default requests;
