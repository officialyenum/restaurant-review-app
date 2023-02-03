import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from "./Review.module.css";

export const Review = ({review}) => {
  return (
    <>
        {/* <!-- review 1 start --> */}
        <details open className={classes.review}>
            <summary>
                <div className={classes['review-heading']}>
                    <div className={classes['review-info']}>
                        <NavLink to={`/profile/${review?.user.id}`} className={classes['review-author']}>{review?.user.fullName}</NavLink>
                        <p className={classes['m-0']}>
                            {review?.rating} Stars &bull; {review?.createdAt}
                        </p>
                    </div>
                </div>
            </summary>

            <div className={classes['review-body']}>
                <p>
                    {review.body}
                </p>
            </div>
        </details>
        {/* <!-- review 1 end --> */}
    </>
  )
}
