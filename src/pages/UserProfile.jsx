import React from "react";
import { useParams } from "react-router-dom";
import { Review } from "../components/ReviewComponents";
import classes from "./UserProfile.module.css";

const UserProfile = () => {
  const reviews = [];
  const { id } = useParams();
  return (
    <div>
      <div>Reviews from {id}</div>
      <div className={classes["review-thread"]}>
        {reviews.length > 0 &&
          reviews.map((review) => <Review key={review.id} review={review} />)}
      </div>
    </div>
  );
};

export default UserProfile;
