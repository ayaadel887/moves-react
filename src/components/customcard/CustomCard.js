import React from "react";
import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import style from "./CustomCard.module.css";
const CustomCard = ({ title, description, imgurl, button, id }) => {
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
    <div className="col-4">
      <div className={style.card}>
        <img alt="movie" src={imgurl} />
        <h5>{title}</h5>
        <div className={style.desc}>
          <p className={style.description}>{description.substr(0, 100)} ...</p>
        </div>

        {button && (
          <button className={style.btn} onClick={() => moveToDetails(id)}>
            Details
            <BsArrowRightCircle className={style.arrowicon} size={25} />
          </button>
        )}
      </div>
    </div>
  );
};

export default CustomCard;
