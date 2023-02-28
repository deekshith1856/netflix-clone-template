import "./App.css";
import React from "react";
import Banner from './components/Banner/Banner';
import Row from './components/Row/Row';
import Navbar from './components/Navbar/Navbar';
import requests from "./request";
function App() {
    return (
        <div className="App">

             <Navbar />
             <Banner />
             <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
             <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
             <Row title='Fantasy Movies' fetchUrl={requests.fetchFantasyMovies} />
             <Row title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} />
             <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
             <Row title='Fantasy Movies' fetchUrl={requests.fetchFantasyMovies} />


         </div>
     )
 }
export default App;
