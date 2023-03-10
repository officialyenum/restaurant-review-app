import React from "react";
import { useSelector } from "react-redux";
import { Hero } from "../components/Hero";
import RecordList from "../components/RecordList";
// import { Testimonials } from "../components/Testimonials";
import { Welcome } from "../components/Welcome";
import classes from "./Home.module.css";

const Home = () => {
  const records = useSelector((state) => state.record.records);

  // const displayRecords = records.length > 0 ? records?.splice(0, 3) : [];

  return (
    <div>
      <Hero />
      <Welcome />
      <div className={classes.top_restaurants_container}>
        <h1 className={classes.header}>Restaurants In Bristol</h1>
        <RecordList records={records} isSearch={false} />
      </div>
    </div>
  );
};

export default Home;
