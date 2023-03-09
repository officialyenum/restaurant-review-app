import React, { useState } from "react";
import Search from "../Search";
import classes from "./Hero.module.css";

export const Hero = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
      <div className={classes.wrapper}>
        <div className={classes.container}>
          <p className={classes.small}>
            The most reliable reviews for restaurants in Bristol
          </p>
          <h1>
            Discover <span>Reviews</span> for <span>Restaurants</span> around
            <span> Bristol</span>
          </h1>
          <div>
            <button onClick={() => setShowSearch(true)}>Search</button>
          </div>
        </div>
      </div>
      {showSearch && <Search handleClose={() => setShowSearch(false)} />}
    </div>
  );
};
