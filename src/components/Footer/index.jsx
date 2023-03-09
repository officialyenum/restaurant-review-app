import React from "react";
import { Link } from "react-router-dom";
import classes from "./Footer.module.css";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className={classes.wrapper}>
      <div className={classes.container}>
        <div className={classes.col}>
          <div className={classes.logo_container}>
            <h1>Food Hygiene Review</h1>
          </div>
          <p className={classes.about_company}>
            About the review ap
          </p>
        </div>
        <div className={classes.col}>
          <h3 className={classes.col_header}>Contact Us</h3>
          <div className={classes.icon_flex}>
            <i class="fa-solid fa-location-dot"></i>
            <p>Location: Bristol UK</p>
          </div>
          <div className={classes.icon_flex}>
            <i class="fa-solid fa-phone"></i>
            <p>Phone Number: +01000100</p>
          </div>
          <div className={classes.icon_flex}>
            <i class="fa-solid fa-envelope"></i>
            <p>Email: contact@foodhygienereview.com</p>
          </div>
        </div>
        <div className={classes.col}>
          <h3 className={classes.col_header}>Navigation Links</h3>
          <Link to="/">Home</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <div className={classes.copyright_bottom}>
        <div className={classes.copyright_bottom_container}>
          <div>
            <p>Copyright &copy;{year} | Food Hygiene Review | All Rights Reserved</p>
          </div>
          <div className={classes.follow_section}>
            <p>Follow Us: </p>
            <a href="##" target="_blank" className={classes.icon}>
              <i class="fa-brands fa-facebook"></i>
            </a>
            <a href="##" target="_blank" className={classes.icon}>
              <i class="fa-brands fa-twitter"></i>
            </a>
            <a href="##" target="_blank" className={classes.icon}>
              <i class="fa-brands fa-instagram"></i>
            </a>
            <a href="##" target="_blank" className={classes.icon}>
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
