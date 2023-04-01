import React, { useContext } from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper";

import { MediaContext } from "../mediaContext/MediaContext";
import style from "./Home.module.css";
import CustomCard from "../customcard/CustomCard";

export default function Home() {
  let { trendingMoves } = useContext(MediaContext);
  let { trendingTVShowes } = useContext(MediaContext);
  //let { trendingPeople } = useContext(MediaContext);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";

  console.log({ trendingMoves });
  return (
    <>
      <div className="row">
        <div className="col-md d-flex align-items-center">
          <div className="w-100 ">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2>Trending </h2>
            <h2>Moves</h2>
            <h2>to watch Now</h2>
            <p className="secondColor mb-3">Most watched movies by day</p>
            <div className={style.brdr}></div>
          </div>
        </div>
        <Swiper
          slidesPerView={1}
          centeredSlides={false}
          slidesPerGroupSkip={1}
          grabCursor={true}
          keyboard={{
            enabled: true,
          }}
          breakpoints={{
            769: {
              slidesPerView: 3,
              slidesPerGroup: 3,
            },
          }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Keyboard, Scrollbar, Navigation, Pagination]}
          className="mySwiper"
        >
          {trendingMoves.map((move) => (
            <SwiperSlide>
              <CustomCard
                key={move.id}
                title={move.title}
                description={move.overview}
                imgurl={baseIMGEURL + move.poster_path}
                button={true}
                id={move.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* {-------------------------------------} */}
      <div className="row">
        <div className="col-md d-flex align-items-center">
          <div className="w-100 ">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2>Trending </h2>
            <h2>TV showes</h2>
            <h2>to watch Now</h2>
            <p className="secondColor mb-3">Most watched TV showes by day</p>
            <div className={style.brdr}></div>
          </div>
        </div>
        {trendingTVShowes.map((tv) => (
          <CustomCard
            key={tv.id}
            title={tv.name}
            description={tv.overview}
            imgurl={baseIMGEURL + tv.poster_path}
            button={true}
            id={tv.id}
          />
        ))}
      </div>
      {/*
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
      </div>{" "}
      */}
    </>
  );
}
