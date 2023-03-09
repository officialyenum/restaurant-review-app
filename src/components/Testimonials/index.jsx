import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Testimonials.module.css";
import { Star } from "../ReviewComponents";

export const Testimonials = () => {
  const reviews = [
    {
      name: "Test User",
      image:
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      stars: [1, 2, 3, 4, 5],
      body: "Test some description",
    },
    {
      name: "Test User",
      image:
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      stars: [1, 2, 3, 4, 5],
      body: "Test some description",
    },
    {
      name: "Test User",
      image:
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      stars: [1, 2, 3, 4, 5],
      body: "Test some description",
    },
    {
      name: "Test User",
      image:
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      stars: [1, 2, 3, 4, 5],
      body: "Test some description",
    },
    {
      name: "Test User",
      image:
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      stars: [1, 2, 3, 4, 5],
      body: "Test some description",
    },
    {
      name: "Test User",
      image:
        "https://st3.depositphotos.com/6672868/13701/v/600/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
      stars: [1, 2, 3, 4, 5],
      body: "Test some description",
    },
  ];
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
            // emulateTouch
          >
            {reviews.map((review, _idx) => (
              <div className={classes.slide} key={_idx}>
                <div className={classes.user_container}>
                  <div className={classes.user_image}>
                    <img src={review?.image} alt={review?.name} />
                  </div>
                  <p>{review?.name}</p>
                </div>
                <p className={classes.review_body}>{`"${review?.body}"`}</p>
                <div className={classes.stars}>
                  {review?.stars.map((star, index) => (
                    <Star
                      star={star}
                      size={"sm"}
                      clickable={false}
                      key={index}
                    />
                  ))}
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};
