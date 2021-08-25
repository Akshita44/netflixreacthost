import React from 'react'
import Homenav from "./Homenav";
import Banner from "./Banner";
import request from "./requests";
import Row from "./Row";
function Home() {
    return (
        <div style={{backgroundColor:"black"}}>
        <Homenav/>
        <Banner/>
        <Row title="Netflix Originals" fetchurl={request.fetchNetflixOriginals}/>
        <Row title="Trending" fetchurl={request.fetchTrending}/>
        <Row title="Top Rated" fetchurl={request.fetchtoprated}/>
        <Row title="Action Movies" fetchurl={request.fetchActionMovies}/>
        <Row title="Comedy Movies" fetchurl={request.fetchComedyMovies}/>
        <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies}/>
        <Row title="Romantic Movies" fetchurl={request.fetchRomanceMovies}/>
        <Row title="Documentaries" fetchurl={request.fetchDocumentaries}/>
        </div>
    )
}
export default Home;
