import { useEffect, useState } from "react";
import classes from "./StarRating.module.css";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

export const StarRating = ({ rating }) => {
  const [ratedStars, setRatedStars] = useState([]);

  useEffect(() => {
    const filledStars = new Array(Math.min(rating, 5)).fill(true);
    const emptyStars = new Array(5 - filledStars.length).fill(false);
    const stars = filledStars.concat(emptyStars);
    setRatedStars(stars);
  }, [rating]);


  return (
    <div className={classes.content}>
      {ratedStars.map((isFilled, index) => (
        <div key={index}>
          {isFilled === true ? (
            <span>
              <AiFillStar />
            </span>
          ) : (
            <span>
              <AiOutlineStar />
            </span>
          )}
        </div>
      ))}
    </div>
  );
};
