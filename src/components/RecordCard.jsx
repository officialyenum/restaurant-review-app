import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./RecordCard.module.css";
import { recordActions } from "../store/slices/record.slice";
import { useDispatch } from "react-redux";

const RecordCard = ({ record }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showMore = () => {
    dispatch(recordActions.resetSelectedRecord());
    if (record.businessName) {
      navigate(`/review/${record.id}`);
    }
  };
  function randomIntFromInterval(min, max) {
    // min and max included
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  const rndInt = randomIntFromInterval(1, 3);
  return (
    <div className={`${classes.panel} ${classes.active}`} onClick={showMore}>
      <div className={classes.image_wrapper}>
        <img src={require(`../assets/res_${rndInt}.webp`)} alt="restaurant" />{" "}
        <p className={classes.disclaimer}>
          Disclaimer: Images provided here are just placeholders and are in no
          way linked to the mentioned restaurant
        </p>
      </div>
      <div className={classes["setting-title"]}>
        <i className="fa-solid fa-cutlery"></i>
        <p>
          {record.businessName} - {record.businessAddress}
        </p>
      </div>
      {/**<div className={classes["setting-content"]}>Extra</div> */}
    </div>
  );
};

export default RecordCard;
