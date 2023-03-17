import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import classes from "./ReviewForm.module.css";
import { Star } from "./Star";
import { submitReview } from "../../store/actions/record.action";
import { ActivityIndicator } from "../Feedback";

export const ReviewForm = ({ record, closeReviewForm }) => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [review, setReview] = useState("");
  const [stars, setStars] = useState([
    {
      id: 1,
      color: "#f39c12",
    },
    {
      id: 2,
      color: "#f39c12",
    },
    {
      id: 3,
      color: "#808080",
    },
    {
      id: 4,
      color: "#808080",
    },
    {
      id: 5,
      color: "#808080",
    },
  ]);
  const dispatch = useDispatch();
  const [rating, setRating] = useState(3);
  const [counter, setCounter] = useState(300);
  const [formError, setFormError] = useState(false);
  const [reviewError, setReviewError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onClickStar = (num) => {
    const nextStars = stars.map((star) => {
      if (star.id <= num) {
        return {
          ...star,
          color: "#f39c12",
        };
      } else {
        return {
          ...star,
          color: "#808080",
        };
      }
    });
    setRating(num);
    setStars(nextStars);
  };

  const handleReviewChange = (e) => {
    setReview(e.target.value);
    const newLength = 300 - review.length;
    setCounter(newLength);
    if (newLength < 0) {
      setReviewError(true);
    } else {
      setReviewError(false);
    }
  };
  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formAuthenticated() !== true) {
      setFormError(!formAuthenticated());
      return;
    }
    dispatch(submitReview(record, rating, review, stars, currentUser));
    closeReviewForm();
    setLoading(false);
  };

  const formAuthenticated = () => {
    if (!rating || rating > 5 || rating < 1) {
      return "Rating is required, and from 1 - 5 ";
    } else if (!review || review.length < 0) {
      return "Error with your review, reviews cannot be empty or more than 300 characters";
    } else if (!currentUser) {
      return "User Submitting is not logged in";
    } else if (!record) {
      return "Error with restaurant";
    } else {
      return true;
    }
  };
  const errorClass = reviewError === true ? classes.error : "";
  return (
    <div>
      <form className={classes["review-form"]} onSubmit={handleReviewSubmit}>
        <h2>Write Your Review</h2>
        {formError && <span className={classes.error}>{formError}</span>}
        <div className={classes.rating}>
          {stars &&
            stars.map((star, index) => (
              <Star
                star={star}
                clickable={true}
                onClick={onClickStar}
                key={index}
              />
            ))}
        </div>
        <span className={classes["help-block"]}>
          Click on a star to change your rating 1 - 5, where 5 = great! and 1 =
          really bad
        </span>
        <h2>Your Review:</h2>
        <textarea
          rows="10"
          placeholder="Your Reivew"
          name="review"
          id="review"
          onChange={handleReviewChange}
          value={review}
        ></textarea>
        <span className={classes["help-block"]}>
          <span className={errorClass}>{counter} Characters remaining </span>
        </span>
        <h2>Your Info:</h2>
        <input
          readOnly
          type="text"
          placeholder="Name"
          name="name"
          id="name"
          defaultValue={currentUser?.fullName}
        />
        <button type="submit" disabled={loading} className={classes.reviewBtn}>
          {loading ? <ActivityIndicator /> : "Submit Review"}
        </button>
        <span className={classes["help-block"]}>
          By clicking <strong>Submit</strong>, I authorize the sharing of my
          name and review on the web. (email will not be shared)
        </span>
      </form>
    </div>
  );
};
