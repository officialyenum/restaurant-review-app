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
            To enhance food hygiene and safety across restaurants in Bristol City by ensuring diners are given access for FSA scheme ratings about restaurants in Bristol City. While allowing them to drop reviews/ratings that are visible to be shared on social media and back to the FSA for updates.
          </p>
        </div>
        <div className={classes.col}>
          <h3 className={classes.col_header}>Contact Us</h3>
          <div className={classes.icon_flex}>
            <i className="fa-solid fa-location-dot"></i>
            <p>Location: Bristol UK</p>
          </div>
          <div className={classes.icon_flex}>
            <i className="fa-solid fa-phone"></i>
            <p>Phone Number: +01000100</p>
          </div>
          <div className={classes.icon_flex}>
            <i className="fa-solid fa-envelope"></i>
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
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a href="##" target="_blank" className={classes.icon}>
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a href="##" target="_blank" className={classes.icon}>
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a href="##" target="_blank" className={classes.icon}>
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
