import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsByRestaurantId } from "../../store/actions/record.action";
import { recordActions } from "../../store/slices/record.slice";
import { Review } from "../ReviewComponents";
import classes from "./Reviews.module.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.record.selectedRecordReviews);

  useEffect(() => {
    dispatch(recordActions.clearRecordReviews());
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId, dispatch]);
  return (
    <div className={classes.wrapper}>
      {reviews.length > 0 ? (
        <div className={classes["review-thread"]}>
          <div className={classes.carouselWrapper}>
            <Carousel
              showArrows={false}
              centerMode
              autoPlay
              interval={5000}
              infiniteLoop
              showStatus={false}
              emulateTouch
              showThumbs={false}
            >
              {reviews.map((review, _idx) => (
                <Review key={review.id} review={review} />
              ))}
            </Carousel>
          </div>
        </div>
      ) : null}
    </div>
  );
};
