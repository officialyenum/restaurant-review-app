import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import classes from './ReviewForm.module.css'
import { Star } from './Star';


export const ReviewForm = () => {
    const currentUser = useSelector(state => state.auth.currentUser);
    const [review, setReview] = useState("");
    const [stars, setStars] = useState([
        {
            id:1,
            color:'#f39c12'
        },{
            id:2,
            color:'#f39c12'
        },{
            id:3,
            color:'#808080'
        },{
            id:4,
            color:'#808080'
        },{
            id:5,
            color:'#808080'
        }
    ]);
    const [rating, setRating] = useState(3);
    const [counter, setCounter] = useState(10);
    const [reviewError, setReviewError] = useState(false)
    

    const onClickStar = (num) => {
        const nextStars = stars.map(star => {
            if (star.id <= num) {
              return {
                ...star,
                color: '#f39c12'
              };
            } else {
              return {
                ...star,
                color: '#808080'
              };
            }
        });
        setRating(num + 1);
        setStars(nextStars);
        console.log(stars);
    }

    const handleReviewChange = (e) => {
        setReview(e.target.value);
        const newLength = 10 - review.length;
        setCounter(newLength);
        if (newLength < 0) {
            setReviewError(true);
        }else{
            setReviewError(false)
        }
    }
    const handleReviewSubmit = (e) => {
        e.preventDefault();
        console.log(rating);
        console.log(review);
    }
    const errorClass = reviewError === true ? classes.error : "";
  return (
    <>
        <form className={classes['review-form']} onSubmit={handleReviewSubmit}>
            <h2>Write Your Review</h2>
            <div className={classes.rating}>
                {stars && stars.map((star,index) => (
                    <Star 
                        star={star}
                        onClick={onClickStar} 
                        key={index}
                    />
                ))}
            </div>
            <span className={classes['help-block']}>
                Click on a star to change your rating 1 - 5, where 5 = great! and 1 = really bad
            </span>
            <h2>Your Review:</h2>
            <textarea rows="10" placeholder="Your Reivew" name="review" id="review" onChange={handleReviewChange} value={review}></textarea>
            <span className={classes['help-block']}>
                <span className={errorClass}>{counter} Characters remaining </span> 
            </span>
            <h2>Your Info:</h2>
            <input readOnly type="text" placeholder="Name" name="name" id="name" defaultValue={currentUser?.fullName}/>
            <button type='submit'>
                Submit Review
            </button>
            <span className={classes['help-block']}>
                By clicking <strong>Submit</strong>, I authorize the sharing of my name and review on the web. (email will not be shared)
            </span>
        </form>
    </>
  )
}
