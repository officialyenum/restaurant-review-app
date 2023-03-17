import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
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
  // console.log("reviews", reviews);
  useEffect(() => {
    dispatch(getReviewsByAuthUser(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const currentUser = useSelector((state) => state.auth.currentUser);
  const isCurrentUserProfile = id === currentUser?.id;

  return (
    <div className={classes.wrapper}>
      <h1 style={{ marginBottom: "2rem", fontSize: "2rem" }}>
        {isCurrentUserProfile
          ? "My Reviews"
          : `${reviews[0]?.user?.fullName ?? ""} Reviews`}
      </h1>
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
