import React from 'react'
import { useParams } from 'react-router-dom';
import classes from './RestaurantReview.module.css'

const RestaurantReview = () => {
    const { id } = useParams();
    console.log('id',id);
    return (
        <main className={classes.review}>
            <div className={classes.profile}>
                <div className={classes['left-info']}>
                    <div className={classes.thumbnail}>
                        <img src="https://avatarfiles.alphacoders.com/131/131892.jpg" alt />
                    </div>
                    <div className={classes['name-info']}>
                        <div className={classes.name}>
                        <a href="">Bruce Wayne</a>
                        </div>
                        <div className={classes.time}>
                        Last Updated : 2 Days Ago・
                        <i className={classes['global-icon']}></i>
                        </div>
                    </div>
                </div>
                <div className={classes['right-info']}></div>
            </div>

            <div className={classes.content}>WHY SO SERIOUS?</div>
                <a className={classes['video-link']} href="https://youtu.be/UnjzmmK7TaY" target="_blank" rel='noreferrer'>
                    <div className="review-wrapper">
                        <div className="review-info">
                            <div className="review-name">YOUTUBE.COM</div>
                            <div className="review-address">Joker【Let's Play a Game】- Official Video</div>
                            <div className="review-desc">"Do I really look like a guy with a plan? You know what I am? I'm a dog chasing cars. I wouldn't know what to do with one if I caught it! You know, I just...DO things."</div>
                        </div>
                    </div>
                </a>

            <div className={classes['feedback-info']}>
                <div></div>
                {/* <div className={classes['feedback-emojis']}>
                    <i className={`${classes.icons} ${classes['laugh-icon']}`}></i>
                    <i className={"icons angry-icon"}></i>
                    <i className={`${classes.icons} ${classes['wow-icon']}`}></i>
                    Tony Stark, Logan and 9487 others
                </div> */}
                <div className={classes['threads-and-share']}>
                    <div className={classes.threads}> 15 reviews</div>
                </div>
            </div>

            <div className={classes['feedback-action']}>
                <div className={classes['fb-wrapper']}>
                    <i className={`${classes['fb-icon']} ${classes['thumb-up']} ${classes.far} ${classes['fa-thumbs-up']}`}></i>Like
                </div>
                <div className={classes['fb-wrapper']}>
                    <i className={`${classes['fb-icon']} ${classes.response} ${classes.far} ${classes['fa-comment-alt']}`}></i>Comment
                </div>
                <div className={classes['fb-wrapper']}>
                    <i className={`${classes['fb-icon']} ${classes.share}`}></i>Share
                </div>
            </div>

            <div className={classes.comments}>
                <div className={classes['my-comment-wrapper']}>
                <div className={classes['my-avatar']}>
                    <img src="https://avatarfiles.alphacoders.com/813/81320.jpg" alt="..." />
                </div>
                <div className={classes['my-comment']}>
                    <div className={classes['my-comment-placeholder']}>
                    <input type="text" placeholder="Write a comment..." />
                    </div>
                </div>
                </div>
                <div className={classes.wrapper}>
                    <div className={classes['people-comment-wrapper']}>
                        <div className={classes['people-avatar']}>
                            <img src="https://i1.sndcdn.com/avatars-000472635192-bk5zvc-t500x500.jpg" alt="..." />
                        </div>
                        <div className={classes['people-comment']}>
                            <div className={classes['people-comment-container']}>
                                <div className={classes['people-name']}>
                                    <a href="https://www.facebook.com/Thanos-66479565036/">Thanos</a>
                                    <i className={classes['blue-check']}></i>
                                </div>
                                <div className={classes['people-saying']}>You're not the only one cursed with knowledge.</div>
                            </div>
                            <div className={classes['comment-reactions']}>
                                <i className={`${classes.icons} ${classes['like-icon']}`}></i>
                                <span className={classes.number}>5 star Ratings</span>
                            </div>
                        </div>
                    </div>
                    <div className={classes['like-and-response-wrapper']}>
                        <div className={classes['like-comment']}>
                            <p>Like</p><span className={classes['tiny-dot']}>・</span>
                        </div>
                        <div className={classes['day-comment']}>4 Days</div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default RestaurantReview