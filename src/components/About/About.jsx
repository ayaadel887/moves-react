import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <>
      <div className={`container w-50 mt-5 ${style.about}`}>
        At noxe, we want to entertain the world.Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum,
        and we’re always looking to help you find your next favorite story.
      </div>
    </>
  );
};

export default About;
