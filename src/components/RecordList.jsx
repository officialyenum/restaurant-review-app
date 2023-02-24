import React from "react";
import RecordCard from "./RecordCard";
import classes from "./RecordList.module.css";

const RecordList = ({ records }) => {
  return (
    <div className={classes.wrapper}>
      <h2>Some Good Restaurants Matching Your Search</h2>
      <div className={classes.container}>
        {records.length !== 0 ? (
          records.map((record) => (
            <RecordCard key={record.id} record={record} />
          ))
        ) : (
          <p>No Restaurants</p>
        )}
      </div>
    </div>
  );
};

export default RecordList;
