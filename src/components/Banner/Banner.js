import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "../../request";

const Banner = () => {
  console.log("yes");
  const [movie, setMovie] = useState([]);
  useEffect(() => {

    async function fetchData() {
      const { data } = await axios.get(requests.fetchNetflixOriginals);
      // console.log(request.data.results);
      //random movie function
      // console.log([Math.floor(Math.random() * request.data.length - 1)]);
      // console.log(request);
      setMovie(data.results[Math.floor(Math.random() * data.length - 1)]);
      console.log(movie);
      // return request;
    } fetchData();
  }, []);
  console.log(movie);

  return (
    <header className="banner"
      style={{
        backgroundSize: "cover",
        // backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path} )`,
        backgroundPosition: "centre-centre"
      }}>
      {/* {console.log("25")} */}
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.original_name}
        </h1>
      </div>
      <div className="banner__button">
        <button className="banner__button">Play</button>
        <button className="banner__button">My List</button>

      </div>
      <div className="banner__description">
        <p>
          {movie?.overview}
        </p>

      </div>
    </header>
  )
};

export default Banner;
