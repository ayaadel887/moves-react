import React from "react";
import style from "./Loding.module.css";

export const Loading = () => {
  return (
    <>
      <div className={style.box}>
        <div className={style.container}>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
          <span className={style.circle}></span>
        </div>
      </div>
    </>
  );
};
