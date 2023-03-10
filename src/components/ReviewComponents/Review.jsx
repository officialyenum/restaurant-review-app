import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Review.module.css";
import { Star } from "./Star";
import moment from "moment";
moment().format();

export const Review = ({ review, showRestaurant }) => {
  const date = new Date(JSON.parse(review?.timeStamp ?? '""'));
  const fromDate = moment().from(date, true);
  return (
    <div>
      <div className={classes.review}>
        <div className={classes["image_review"]}>
          <div className={classes["customer_image"]}>
            <img
              src="https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
              alt="customer pics"
            />
          </div>
          <div className={classes["customer_name_review_status"]}>
            <div className={classes["customer_name"]}>
              <NavLink to={`/profile/${review?.user.id}`}>
                {review?.user.fullName} &bull; {fromDate} ago
              </NavLink>
            </div>
          </div>
        </div>
        <div className={classes["customer_comment"]}>
          <div className={classes["customer_review"]}>
            {review &&
              review?.stars.map((star, index) => (
                <Star star={star} size={"sm"} clickable={false} key={index} />
              ))}
          </div>
          <span>{review?.body}</span>
        </div>
        {showRestaurant && (
          <>
            <div className={classes["customer_comment"]}>
              <div className={classes["customer_review"]}>Business Name :</div>

              <NavLink to={`/review/${review?.restaurant?.id}`}>
                <span>{review?.restaurant?.businessName}</span>
              </NavLink>
            </div>
            <div className={classes["customer_comment"]}>
              <div className={classes["customer_review"]}>
                Business Address :
              </div>
              <span>{review?.restaurant?.businessAddress}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
