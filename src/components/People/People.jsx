import axios from "axios";
import React, { useEffect, useState } from "react";
import style from "./People.module.css";
export default function People() {
  let [trendingPeople, settrendingPeople] = useState([]);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";
  let handelGetTrendingItems = async (mediatype, callbackSetFunc) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=a073c404739d2a76c90fb6aac68b40f6`
    );

    callbackSetFunc(data.results);
  };
  useEffect(() => {
    handelGetTrendingItems("person", settrendingPeople);
  }, []);
  return (
    <>
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
