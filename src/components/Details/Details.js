import axios from "axios";
import React from "react";
import { useSearchParams } from "react-router-dom";
axios;
const Details = () => {
  let [searchParams, setsearchParams] = useSearchParams();
  console.log(searchParams.get("id"));
  async function getDetails() {
    let { data } = await axios.get();
  }
  return <div>Details</div>;
};
export default Details;
