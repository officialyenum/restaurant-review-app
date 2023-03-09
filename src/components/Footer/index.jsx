import React from "react";
import classes from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.col}>
          <div className={classes.logo_container}>
            <h1>LOGO</h1>
          </div>
          <p className={classes.about_company}>
            about the restaurant review ap
          </p>
        </div>
        <div className={classes.col}>
          <h3 className={classes.col_header}>Contact Us</h3>
          <div className={classes.icon_flex}>
            <em>Icon</em>
            <p>1234 Some St San Francisco, CA 94102, US 1.800.123.4567</p>
          </div>
          <div className={classes.icon_flex}>
            <em>Icon</em>
            <p>1234 Some St San Francisco, CA 94102, US 1.800.123.4567</p>
          </div>
          <div className={classes.icon_flex}>
            <em>Icon</em>
            <p>support@axiomthemes.com</p>
          </div>
        </div>
        <div className={classes.col}>
          <h3 className={classes.col_header}>Navigation Links</h3>
          <p>Home</p>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Login</p>
          <p>Register</p>
        </div>
      </div>
      <div className={classes.copyright_bottom}>
        <div className={classes.copyright_bottom_container}>
          <div>
            <p>Copyright &copy;{year} | All Rights Reserved</p>
          </div>
          <div className={classes.follow_section}>
            <p>Follow Us: </p>
            <em>icon</em>
            <em>icon</em>
            <em>icon</em>
            <em>icon</em>
          </div>
        </div>
      </div>
    </div>
  );
};
