import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReviewsByRestaurantId } from "../../store/actions/record.action";
import { recordActions } from "../../store/slices/record.slice";
import { Review } from "../ReviewComponents";
import classes from "./Reviews.module.css";

export const Reviews = ({ restaurantId }) => {
  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.record.selectedRecordReviews);

  useEffect(() => {
    dispatch(recordActions.clearRecordReviews());
    dispatch(getReviewsByRestaurantId(restaurantId));
  }, [restaurantId, dispatch]);
  return (
    <div>
      <div className={classes["review-thread"]}>
        {reviews.length > 0 &&
          reviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
    </div>
  );
};
