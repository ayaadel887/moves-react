import axios from "axios";
import React, { useContext } from "react";
import { MediaContext } from "../mediaContext/MediaContext";
import style from "./People.module.css";
import CustomCard from "../customcard/CustomCard";
const Tvshowes = () => {
  let { trendingTVShowes } = useContext(MediaContext);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";
  console.log({ trendingTVShowes });
  return (
    <>
      <div className="row">
        <div className="col-md d-flex align-items-center">
          <div className="w-100 ">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2>Trending </h2>
            <h2>trendingTVShowes</h2>
            <p className="secondColor mb-3">
              Most Trending trendingTVShowes by day
            </p>
            <div className={style.brdr}></div>
          </div>
        </div>

        {trendingTVShowes.map((show) => (
          <CustomCard
            key={show.id}
            title={show.name}
            description={show.overview}
            imgurl={baseIMGEURL + show.poster_path}
            button={true}
            id={show.id}
          />
        ))}
      </div>
    </>
  );
};

export default Tvshowes;
