import { BsArrowRightCircle } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import style from "./CustomCard.module.css";
const CustomCard = ({ title, imgurl, button, id, isSwiper }) => {
  let navigate = useNavigate();

  let moveToDetails = (id) => {
    navigate({ pathname: "/details", search: `?id=${id}` });
  };

  const cardContent = (
    <div className={style.card}>
      <img alt="movie" src={imgurl} />
      <div className={style.overlay}>
        <h5>{title}</h5>
        {button && (
          <button
            className={style.DetailsBtn}
            onClick={() => moveToDetails(id)}
          >
            Details
            <BsArrowRightCircle className={style.arrowicon} size={25} />
          </button>
        )}
      </div>
    </div>
  );

  if (isSwiper) {
    return <div className={style.cardcontainer}>{cardContent}</div>;
  }

  return (
    <div className={`col-xs-12 col-sm-4 ${style.cardcontainer}`}>
      {cardContent}
    </div>
  );
};

export default CustomCard;
