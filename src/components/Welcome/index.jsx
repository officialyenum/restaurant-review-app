import React from "react";
import classes from "./welcome.module.css";
import WelcomeImage from "../../assets/welcome.webp";

export const Welcome = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.leftContainer}>
          <img src={WelcomeImage} alt="Welcome" />
        </div>
        <div className={classes.rightContainer}>
          <h1>
            <span>Welcome</span>
            <br /> to Food Hygiene Review in Bristol
          </h1>
          <p>To enhance food hygiene and safety across restaurants in Bristol City by ensuring diners are given access for FSA scheme ratings about restaurants in Bristol City. While allowing them to drop reviews/ratings that are visible to be shared on social media and back to the FSA for updates.s</p>
        </div>
      </div>
    </div>
  );
};
