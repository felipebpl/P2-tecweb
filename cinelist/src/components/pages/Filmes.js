import React from 'react'
import '../../App.css'
import Row from '../Row/Row';
import requests from '../../API/request';


export default function Filmes(){
    return (

    <div className="app">

    <Row title="Top Rated" id="TM" fetchUrl={requests.fetchTopRated} isLargeRow/>

    <Row title="Trending Now" id="TN" fetchUrl={requests.fetchTrending} />

    <Row title="Action Movies" id="AM" fetchUrl={requests.fetchActionMovies} />

     <Row title="Comedy Movies"  id="CM" fetchUrl={requests.fetchComedyMovies} />

     <Row title="Horror Movies" id="HM" fetchUrl={requests.fetchHorrorMovies} />

     <Row title="Romance  Movies" id="RM" fetchUrl={requests.fetchRomanceMovies} />

     <Row title="Documentaries" id="DM" fetchUrl={requests.fetchDocumentaries} />

    </div>

    )
     ; 
}