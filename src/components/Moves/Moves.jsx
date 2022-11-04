import React, { useContext } from "react";
import { MediaContext } from "../mediaContext/MediaContext";
//------style-------
import style from "./Moves.module.css";

export default function Moves() {
  let { trendingMoves } = useContext(MediaContext);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";

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
