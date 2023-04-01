import React, { useContext } from "react";
import { MediaContext } from "../../components/mediaContext/MediaContext";
import style from "./People.module.css";
export default function People() {
  let { trendingPeople } = useContext(MediaContext);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";

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
