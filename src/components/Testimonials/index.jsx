import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { getLatestTenReviews } from "../../store/actions/record.action";
import { Review } from "../ReviewComponents";
import classes from "./Testimonials.module.css";

export const Testimonials = () => {
  const reviews = useSelector((state) => state.record.selectedRecordReviews);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLatestTenReviews());
  }, [dispatch]);

  // console.log("reviews", reviews);
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Testimonials</h1>
        <p>Reviews from our customers</p>
        <div className={classes.carouselWrapper}>
          <Carousel
            showArrows={false}
            centerMode
            autoPlay
            interval={5000}
            infiniteLoop
            showStatus={false}
            showThumbs={false}
            showIndicators={false}
            centerSlidePercentage={90}
            // emulateTouch
          >
            {reviews?.length > 0
              ? reviews?.map((review, _idx) => <Review review={review} />)
              : "No Reviews Found"}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
