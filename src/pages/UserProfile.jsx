import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useParams } from "react-router-dom";
import { Review } from "../components/ReviewComponents";
import { getReviewsByAuthUser } from "../store/actions/record.action";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  //
  const { id } = useParams();

  const dispatch = useDispatch();
  const reviews = useSelector((state) => state.record.authUserReviews);
  console.log(reviews);
  useEffect(() => {
    dispatch(getReviewsByAuthUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className={classes.wrapper}>
      <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>My Reviews</h1>
      {reviews.length > 0 ? (
        <div className={classes["review-thread"]}>
          {reviews.map((review, _idx) => (
            <Review key={review.id} review={review} showRestaurant={true} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default UserProfile;
