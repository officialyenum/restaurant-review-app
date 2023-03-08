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
          Restaurant Hygiene Review.
        </h2>
        <p className={classes.homeSmall}>
          Search Restaurants for Hygiene, Structure, Rating scores and Reviews.
        </p>
        <Search />
      </div>
      <RecordList records={records} />
    </>
  );
};

export default Home;
