import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { MediaContext } from "../mediaContext/MediaContext";
import style from "./Home.module.css";

export default function Home() {
  let { trendingMoves } = useContext(MediaContext);
  let { trendingTVShowes } = useContext(MediaContext);
  let { trendingPeople } = useContext(MediaContext);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";

  let navigate = useNavigate();

  let moveToDetails = (id) => {
    console.log(id, "id");
    navigate({ pathname: "/details", search: `?id=${id}` });
    //لو  عايزه تنافيجيت لحاجه ومعاها باراميتر
    // ادي النافيجيت
    // اوبجيكتobject
    //object take two things
  };
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
          <div
            onClick={() => moveToDetails(move.id)}
            key={move.id}
            className="col-md-2 my-3"
          >
            <div>
              <img
                className="w-100"
                alt="movie"
                src={baseIMGEURL + move.poster_path}
              />
              <h5 className={style.movititle}>{move.title}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md d-flex align-items-center">
          <div className="w-100 ">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2>Trending </h2>
            <h2>TV showes</h2>
            <h2>to watch Now</h2>
            <p className="secondColor mb-3">Most watched TV showes by day</p>
            <div className={style.brdr}></div>
          </div>
        </div>
        {trendingTVShowes.map((tv) => (
          <div key={tv.id} className="col-md-2 my-3">
            <div>
              <img
                className="w-100"
                alt="tv's"
                src={baseIMGEURL + tv.poster_path}
              />
              <h5>{tv.name}</h5>
            </div>
          </div>
        ))}
      </div>
      <div className="row">
        <div className="col-md d-flex align-items-center">
          <div className="w-100 ">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2>Trending </h2>
            <h2>people</h2>
            <p className="secondColor mb-3">Most Trending people by day</p>
            <div className={style.brdr}></div>
          </div>
        </div>

        {trendingPeople.map((person) => (
          <div key={person.id} className="col-md-2 my-3">
            <div>
              <img
                className="w-100"
                alt="people"
                src={baseIMGEURL + person.profile_path}
              />
              <h5>{person.name}</h5>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
