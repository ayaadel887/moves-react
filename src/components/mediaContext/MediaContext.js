import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createContext } from "react";

export let mediaContext = createContext([]);
let mediaContextProvider = (props) => {
  let [trendingMoves, settrendingMoves] = useState([]);
  let [trendingTVShowes, settrendingTVShowes] = useState([]);
  let [trendingPeople, settrendingPeople] = useState([]);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";
  let handelGetTrendingItems = async (mediatype, callbackSetFunc) => {
    let { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/${mediatype}/day?api_key=a073c404739d2a76c90fb6aac68b40f6`
    );

    callbackSetFunc(data.results);
  };
  let navigate = useNavigate();
  useEffect(() => {
    handelGetTrendingItems("movie", settrendingMoves);
    handelGetTrendingItems("tv", settrendingTVShowes);
    handelGetTrendingItems("person", settrendingPeople);
  }, []);
  return (
    <mediaContext.Provider
      value={{ trendingMoves, trendingTVShowes, trendingPeople }}
    >
      {props.children}
    </mediaContext.Provider>
  );
};
