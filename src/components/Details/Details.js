import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { BsShareFill, BsFillHeartFill, BsChatLeftFill } from "react-icons/bs";
import style from "./details.module.css";

const Details = () => {
  let [searchParams, setsearchParams] = useSearchParams();
  let [detailsData, setDetailsData] = useState({});
  let currentId = searchParams.get("id");
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";
  let getDetails = async () => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${currentId}?api_key=a073c404739d2a76c90fb6aac68b40f6&language=en-US`
    );
    setDetailsData(data);
    console.log(data, "data sdetails");
    console.log(detailsData.original_title, "detailsData");
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <div className={style.movie_card} id="ave">
        <div className={style.info_section}>
          <div className={style.movie_header}>
            <img
              className={style.locandina}
              src={baseIMGEURL + detailsData.poster_path}
            />
            <h1>{detailsData.title}</h1>
            <h4>{detailsData.release_date}, Ryan Coogler</h4>
            <span className={style.minutes}>{detailsData.runtime} min</span>
            <p className={style.type}>Action, Adventure, Sci-Fi</p>
          </div>
          <div className={style.movie_desc}>
            <p className={style.text}>{detailsData.overview}</p>
          </div>
          <div className={style.movie_social}>
            <ul>
              <li>
                <BsShareFill />
              </li>
              <li>
                <BsFillHeartFill />
              </li>
              <li>
                <BsChatLeftFill />
              </li>
            </ul>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${baseIMGEURL}${detailsData.backdrop_path})`,
          }}
          className={`${style.blur_back} `}
        ></div>
      </div>
    </>
  );
};
export default Details;
