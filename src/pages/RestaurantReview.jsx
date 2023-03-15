import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Reviews, ReviewForm } from "../components/ReviewComponents";
import {
  getRecordById,
  getReviewsByRestaurantId,
} from "../store/actions/record.action";
import classes from "./RestaurantReview.module.css";
import moment from "moment";
import { StarRating } from "../components/Ratings";
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
    dispatch(getRecordById(id));
    dispatch(getReviewsByRestaurantId(id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const goToLogin = () => {
    navigate(`/login?ref=/review/${id}`);
  };

  // console.log(record);

  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 3);

  return (
    <div className={classes.review}>
      <div>
        <div className={classes.res_image}>
          <img src={require(`../assets/res_${rndInt}.webp`)} alt="restaurant" />
        </div>
        <p className={classes.disclaimer}>
          Disclaimer: Images provided here are just placeholders and are in no
          way linked to the mentioned restaurant
        </p>
        <div className={classes.restaurantProfile}>
          <div className={classes.restaurantNameAndLastRated}>
            <h2>{record?.businessName}</h2>
            <p>
              Last Rated:{" "}
              {record?.ratingDate
                ? `${moment().from(record?.ratingDate, true)} ago`
                : "N/A"}
              <span>
                <i className={classes["global-icon"]}></i>
              </span>
            </p>
          </div>
          <div className={classes.location}>
            <i class="fa-solid fa-location-dot"></i>
            <h2>{record?.businessAddress}</h2>
          </div>
          <div className={classes.hygiene_cards}>
            <div className={classes.hygiene_card}>
              <i class="fa-solid fa-briefcase"></i>
              <h1>Business Type</h1>
              <p>{record?.businessType ?? "N/A"}</p>
            </div>
            <div className={classes.hygiene_card}>
              <i class="fa-solid fa-star"></i>
              <h1>Rating</h1>
              <h2>{record?.rating}</h2>
              <div className={classes.starWrapper}>
                <StarRating rating={record?.rating} />
              </div>
            </div>
            <div className={classes.hygiene_card}>
              <i class="fa-solid fa-hands-holding-circle"></i>
              <h1>Hygiene Score</h1>
              <h2>{record?.scoresHygiene}</h2>
              <div className={classes.starWrapper}>
                <StarRating rating={record?.scoresHygiene} />
              </div>
            </div>
            <div className={classes.hygiene_card}>
              <i className="fa fa-search"></i>
              <h1>Structural Score</h1>
              <h2>{record?.scoresStructural}</h2>
              <div className={classes.starWrapper}>
                <StarRating rating={record?.scoresStructural} />
              </div>
            </div>
          </div>
          <div className={classes.threads}>{reviews.length} Reviews</div>

          {currentUser && (
            <div
              className={`${classes.drop_review_button} ${
                showReviewForm ? classes.closeButton : ""
              }`}
            >
              <button onClick={() => setShowReviewForm((prev) => !prev)}>
                {showReviewForm ? "CANCEL" : "Drop a review"}
              </button>
            </div>
          )}
          {currentUser && showReviewForm && (
            <ReviewForm
              record={record}
              closeReviewForm={() => setShowReviewForm(false)}
            />
          )}
          {!currentUser && (
            <div className={classes.drop_review_button}>
              <button onClick={goToLogin}>Login To Drop a Review</button>
            </div>
          )}
          <Reviews restaurantId={id} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantReview;
