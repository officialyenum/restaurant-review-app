import React from "react";
import classes from "./contact.module.css";

export const ContactUsHome = () => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <h1>Contact Us Now</h1>
        <p>to get more information</p>
        <button className={classes.button}>Contact Us</button>
      </div>
    </div>
  );
};
