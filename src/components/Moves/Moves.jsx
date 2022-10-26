import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import style from "./Moves.module.css";
export default function Moves() {
  let [trendingMoves, settrendingMoves] = useState([]);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";
  let handelGetTrendingItems = async (mediatype, callbackSetFunc) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=a073c404739d2a76c90fb6aac68b40f6`
    );

    callbackSetFunc(data.results);
  };
  useEffect(() => {
    handelGetTrendingItems("movie", settrendingMoves);
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md d-flex align-items-center">
          <div className="w-100 ">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2>Trending </h2>
            <h2>Moves</h2>
            <h2>to watch Now</h2>
            <p className="secondColor mb-3">Most watched movies by day</p>
            <div className={style.brdr}></div>
          </div>
        </div>
        {trendingMoves.map((move) => (
          <div key={move.id} className="col-md-2 my-3">
            <div>
              <img
                className="w-100"
                alt="movie"
                src={baseIMGEURL + move.poster_path}
              />
              <h5>{move.title}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
