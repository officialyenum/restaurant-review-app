import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Reviews, ReviewForm } from "../components/ReviewComponents";
import { getRecordById, getReviewsByRestaurantId } from "../store/actions/record.action";
import classes from "./RestaurantReview.module.css";
import moment from "moment";
moment().format();

const RestaurantReview = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const record = useSelector((state) => state.record.selectedRecord);
  const reviews = useSelector((state) => state.record.selectedRecordReviews);
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const [showReviewForm, setShowReviewForm] = useState(false);

  useEffect(() => {
    console.log("load review");
    dispatch(getRecordById(id));
    dispatch(getReviewsByRestaurantId(id));
  }, [id, dispatch]);

  const goToLogin = () => {
    navigate(`/login?ref=/review/${id}`);
  };

  return (
    <main className={classes.review}>
      <div className={classes.profile}>
        <div className={classes["left-info"]}>
          <div className={classes["name-info"]}>
            <div className={classes.time}>
              Last Rated :{" "}
              {record.ratingDate
                ? `${moment().from(record.ratingDate, true)} ago`
                : "N/A"}
              <span>
                <i className={classes["global-icon"]}></i>
              </span>
            </div>
          </div>
        </div>
        <div className={classes["right-info"]}></div>
      </div>

      <div className={classes.content}>
        {record?.businessName} - {record?.businessAddress}
      </div>
      <div className={classes["review-wrapper"]}>
        <div className={classes["review-info"]}>
          <div className={classes["review-name"]}>
            Type of Business :{" "}
            {record.businessType !== null ? record.businessType : "N/A"}
          </div>
          <div className={classes["review-name"]}>
            Rating : {record.rating !== null ? record.rating : "N/A"}
          </div>
          <div className={classes["review-name"]}>
            Hygiene Score :{" "}
            {record.scoresHygiene !== null ? record.scoresHygiene : "N/A"}
          </div>
          <div className={classes["review-name"]}>
            Structural Score :{" "}
            {record.scoresStructural !== null ? record.scoresStructural : "N/A"}
          </div>
        </div>
      </div>

      <div className={classes["feedback-info"]}>
        <div className={classes["threads-and-share"]}>
          <div className={classes.threads}> {reviews.length} reviews</div>
        </div>
      </div>
      {currentUser && (
        <div className={classes.loginBtn2}>
          <button onClick={() => setShowReviewForm((prev) => !prev)}>
            {showReviewForm ? "CANCEL" : "Drop a review"}
          </button>
        </div>
      )}
      {currentUser && showReviewForm && (
        <>
          <ReviewForm record={record} />
        </>
      )}
      {!currentUser && (
        <div className={classes.loginBtn}>
          <button onClick={goToLogin}>Login To Drop a Review</button>
        </div>
      )}
      <Reviews restaurantId={id} />
    </main>
  );
};

export default RestaurantReview;
