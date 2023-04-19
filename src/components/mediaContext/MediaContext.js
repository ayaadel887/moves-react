import axios from "axios";

import React, { useEffect, useState } from "react";

import { createContext } from "react";
import { Instance } from "../../Instance";

export let MediaContext = createContext([]);

export let MediaContextProvider = (props) => {
  let [trendingMoves, settrendingMoves] = useState([]);
  let [trendingTVShowes, settrendingTVShowes] = useState([]);
  let [trendingPeople, settrendingPeople] = useState([]);

  let handelGetTrendingItems = async (mediatype, callbackSetFunc) => {
    let { data } = await Instance.get(
      `${mediatype}/day?api_key=a073c404739d2a76c90fb6aac68b40f6`
    );

    callbackSetFunc(data.results);
  };

  useEffect(() => {
    handelGetTrendingItems("movie", settrendingMoves);
    handelGetTrendingItems("tv", settrendingTVShowes);
    handelGetTrendingItems("person", settrendingPeople);
  }, []);
  return (
    <MediaContext.Provider
      value={{ trendingMoves, trendingTVShowes, trendingPeople }}
    >
      {props.children}
    </MediaContext.Provider>
  );
};
