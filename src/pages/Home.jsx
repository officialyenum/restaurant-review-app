import React from "react";
import { useSelector } from "react-redux";
import RecordList from "../components/RecordList";
import Search from "../components/Search";
import classes from "./Home.module.css";

const Home = () => {
  const records = useSelector((state) => state.record.records);
  return (
    <>
      <div className={classes.homeWrapper}>
        <h2 className={classes.home}>
          Find the best restaurants in any location.
        </h2>
        <p className={classes.homeSmall}>
          Search for a restaurant and leave a review
        </p>
        <Search />
      </div>
      <RecordList records={records} />
    </>
  );
};

export default Home;
