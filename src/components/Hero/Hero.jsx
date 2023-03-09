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
            The most reliable reviews for any restaurant in the world
          </p>
          <h1>
            Discover <span>Restaurants</span> around you and find the best that{" "}
            <span>suits</span> your taste
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
