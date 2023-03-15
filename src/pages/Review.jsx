import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ReviewsList } from "../components/ReviewComponents/ReviewsList";
import { getLatestTenReviews } from "../store/actions/record.action";
import classes from "./Review.module.css";

const Review = () => {
  const reviews = useSelector((state) => state.record.selectedRecordReviews);
  const dispatch = useDispatch();
  useEffect(() => {
    // console.log("working");
    dispatch(getLatestTenReviews());
  }, [dispatch]);
  return (
    <div className={classes.reviewContainer}>
      <div className={classes.reviewWrapper}>
        <h2 className={classes.review}>Latest Reviews.</h2>
      </div>
      {reviews && <ReviewsList reviews={reviews} showRestaurant={true} />}
    </div>
  );
};

export default Review;
