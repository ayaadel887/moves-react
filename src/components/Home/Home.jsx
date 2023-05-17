import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
// import required modules
import { Navigation, Pagination } from "swiper";

// import { MediaContext } from "../mediaContext/MediaContext";
import style from "./Home.module.css";
import CustomCard from "../customcard/CustomCard";
import useResizeScreen from "../../ResizeScreen";
import useMovesQuery from "../../Hooks/useMovesApi";
import usePeopleApi from "../../Hooks/usePeopleApi";
import useTVshowsApi from "../../Hooks/useTVshowsApi";
import { Loading } from "../Loadding/Loading";
import Error from "../Error/Error";

export default function Home() {
  // let { trendingMoves } = useContext(MediaContext);
  // let { trendingTVShowes } = useContext(MediaContext);
  // let { trendingPeople } = useContext(MediaContext);
  let baseIMGEURL = "https://image.tmdb.org/t/p/original";
  const { width } = useResizeScreen();

  const {
    data: moves,
    isLoading: isMovesLoading,
    error: movesError,
    refetch: refetchMoves,
  } = useMovesQuery();

  const {
    data: tVshows,
    isLoading: isTVshowsLoading,
    error: TVshowsError,
    refetch: refetchtVshows,
  } = useTVshowsApi();
  const {
    data: people,
    isLoading: isPeopleLoading,
    error: PeopleError,
    refetch: refetchPeople,
  } = usePeopleApi();
  if (isMovesLoading || isTVshowsLoading || isPeopleLoading) {
    return <Loading />;
  }
  if (movesError || TVshowsError || PeopleError) {
    <Error
      refetchMoves={refetchMoves}
      refetchtVshows={refetchtVshows}
      refetchPeople={refetchPeople}
    />;
  }
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
          slidesPerView={width > 600 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {moves?.results.map((move) => (
            <SwiperSlide key={move.id}>
              <CustomCard
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

        <Swiper
          slidesPerView={width > 600 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {tVshows?.results.map((tv) => (
            <SwiperSlide key={tv.id}>
              <CustomCard
                title={tv.name}
                description={tv.overview}
                imgurl={baseIMGEURL + tv.poster_path}
                button={true}
                id={tv.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="row">
        {/* <div className="col-md d-flex align-items-center">
          <div className="w-100 ">
            <div className={`w-25 ${style.brdr} mb-3`}></div>
            <h2>Trending </h2>
            <h2>people</h2>
            <p className="secondColor mb-3">Most Trending people by day</p>
            <div className={style.brdr}></div>
          </div>
        </div> */}
        <Swiper
          slidesPerView={width > 600 ? 3 : 1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {people?.results.map((person) => (
            <SwiperSlide key={person.id}>
              <div className="col my-3 mx-2">
                <div>
                  <img
                    className="w-100"
                    alt="people"
                    src={baseIMGEURL + person.profile_path}
                  />
                  <h5 className="text-center font-weight-bold mb-5">
                    {person.name}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
