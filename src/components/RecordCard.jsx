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
  return (
    <div className={`${classes.panel} ${classes.active}`} onClick={showMore}>
      <div className={classes["setting-title"]}>
        <i className="fa-solid fa-cutlery"></i>
        <p>
          {record.businessName} - {record.businessAddress}
        </p>
      </div>
      <div className={classes["setting-content"]}>Extra</div>
    </div>
  );
};

export default RecordCard;
