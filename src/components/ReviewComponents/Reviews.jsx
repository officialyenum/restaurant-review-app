import React from 'react'
import { Review } from '../ReviewComponents';
import classes from "./Reviews.module.css";

export const Reviews = () => {
  return (
    <div>
        <div className={classes['review-thread']}>
            {/* <!-- review 1 start --> */}
            <Review review={{
                id:'1',
                user:{
                    id:'1',
                    fullName: 'Yenum Eboka',
                },
                rating: 4,
                body: 'This is really great! I fully agree with what you wrote, and this is sure to help me out in the future. Thank you for posting this.',
                createdAt: '4 days ago'}
            }/>
            {/* <details open className={classes.review}>
                <summary>
                    <div className={classes['review-heading']}>
                        <div className={classes['review-info']}>
                            <a href="#" className={classes['review-author']}>someguy14</a>
                            <p className={classes['m-0']}>
                                5 rating &bull; 4 days ago
                            </p>
                        </div>
                    </div>
                </summary>

                <div className={classes['review-body']}>
                    <p>
                        This is really great! I fully agree with what you wrote, and this is sure to help me out in the future. Thank you for posting this.
                    </p>
                </div>
            </details> */}
            {/* <!-- review 1 end --> */}
        </div>
    </div>
  )
}