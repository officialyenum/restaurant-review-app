import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import classes from './RestaurantReview.module.css'

const RestaurantReview = () => {
    const { id } = useParams();
    const record = useSelector((state) => state.record.selectedRecord)
    useEffect(() => {
        console.log(id);
        console.log(record);
    }, [id, record])
    return (
        <main className={classes.review}>
            <div className={classes.profile}>
                <div className={classes['left-info']}>
                    <div className={classes['name-info']}>
                        <div className={classes.time}>
                        Last Rated : {record?.ratingDate}
                        <span>
                            <i className={classes['global-icon']}></i>
                        </span>  
                        </div>
                    </div>
                </div>
                <div className={classes['right-info']}></div>
            </div>

            <div className={classes.content}>{record?.businessName} - {record?.businessAddress}</div>
            <div className={classes['review-wrapper']}>
                <div className={classes['review-info']}>
                    <div className={classes['review-name']}>Type of Business : {record?.businessType}</div>
                    <div className={classes['review-name']}>Rating : {record?.rating}</div>
                    <div className={classes['review-name']}>Hygiene Score : {record?.scoresHygiene}</div>
                    <div className={classes['review-name']}>Structural Score : {record?.scoresStructural}</div>
                </div>
            </div>

            <div className={classes['feedback-info']}>
                <div className={classes['threads-and-share']}>
                    <div className={classes.threads}> 15 reviews</div>
                </div>
            </div>
        </main>
    )
}

export default RestaurantReview