import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

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
    console.log(data, "data sdetails .img");
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <>
      <div className="row">
        <div className="col-md-4">
          <img
            className="w-100"
            alt="movie"
            src={baseIMGEURL + detailsData.poster_path}
          />
        </div>
        <div className="col-md-8">
          <h6 className="m-3">{detailsData.overview}</h6>
        </div>
      </div>
    </>
  );
};
export default Details;
