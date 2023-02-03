import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {Reviews , ReviewForm } from '../components/ReviewComponents';
import { getRecordById } from '../store/actions/record.action';
import classes from './RestaurantReview.module.css'

const RestaurantReview = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const record = useSelector((state) => state.record.selectedRecord)
    const currentUser = useSelector((state) => state.auth.currentUser)
    const dispatch = useDispatch();

    useEffect(() => {
        console.log("load review");
        dispatch(getRecordById(id));
    }, [id, dispatch])

    const goToLogin = () => {
        navigate(`/login?ref=/review/${id}`)
    }

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
            {currentUser && (
            <> 
                <ReviewForm/>
            </>
            )}
            {!currentUser && (
                <div className={classes.loginBtn}>
                    <button onClick={goToLogin}>Login To Drop a Review</button>
                </div>
            )}
            <Reviews/>
            
        </main>
    )
}

export default RestaurantReview