import React from 'react'
import { Review } from '.';
import classes from "./ReviewsList.module.css";

export const ReviewsList = ({ reviews, showRestaurant }) => {
    // console.log('ReviewsList line 6');
    // console.log(reviews);
  return (
    <div>
        <div className={classes['review-thread']}>
            {reviews.length > 0 && reviews.map(review => (
                <Review key={review.id} showRestaurant={showRestaurant} review={review}/>
            ))}
        </div>
    </div>
  )
}