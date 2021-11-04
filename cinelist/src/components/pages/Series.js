import React from 'react'
import '../../App.css'
import Row from '../Row/Row';
import requests from '../../API/request';


export default function Filmes(){
    return (

    <div className="app">

    <Row  title="Netflix Originals" id="NO" fetchUrl={requests.fetchNetflixOriginals} isLargeRow/>

    <Row title="Drama" id="DT" fetchUrl={requests.fetchDramaTV} />

    <Row title="Action and Adventure" id="AM" fetchUrl={requests.fetchActionTV} />

    <Row title="Comedy" id="CT" fetchUrl={requests.fetchComedyTV} />

    <Row title="Animation" id="AT" fetchUrl={requests.fetchAnimationTV} />
    
     <Row title="Mystery" id="MT" fetchUrl={requests.fetchMysteryTV} />

     <Row title="Sci-Fi and Fantasy" id="SF" fetchUrl={requests.fetchSciFiTV} />

     <Row title="Western" id="WT" fetchUrl={requests.fetchWesternTV} />

     <Row title="War and Politics" id="HT" fetchUrl={requests.fetchWarTV} />

    </div>

    )
     ; 
}