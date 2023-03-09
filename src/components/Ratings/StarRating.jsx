import classes from "./StarRating.module.css";

export const StarRating = ({ rating }) => {
  const filledStars = new Array(Math.min(rating, 5)).fill(true);
  const emptyStars = new Array(5 - filledStars.length).fill(false);
  const stars = filledStars.concat(emptyStars);
  return (
    <div className={classes.content}>
      {stars.map((isFilled, index) =>
        isFilled ? (
          <i class="fa-solid fa-star" key={index}></i>
        ) : (
          <i class="fa-regular fa-star"></i>
        )
      )}
    </div>
  );
};
