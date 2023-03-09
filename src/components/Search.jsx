import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { searchRecords } from "../store/actions/record.action";
import { ActivityIndicator } from "./Feedback";
import classes from "./Search.module.css";

const Search = ({ handleClose }) => {
  const [search, setSearch] = useState("");
  const [response, setResponse] = useState({});
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const searchHandler = async () => {
    setLoading(true);
    if (!search || search === "") {
      setResponse("Search is Empty");
      setLoading(false);
      return;
    }
    dispatch(searchRecords(search));
    setTimeout(() => {
      handleClose();
      setLoading(false);
    }, 4000);
    setResponse("Success");
  };
  console.log(response);

  const handleParentClick = (e) => {
    handleClose();
  };

  const handleChildClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className={classes.container} onClick={handleParentClick}>
      <div className={classes.wrap} onClick={handleChildClick}>
        <div className={classes.search}>
          <input
            type="text"
            className={classes.searchTerm}
            placeholder="Search By Restaurant Name or Name ?"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            onClick={searchHandler}
            type="submit"
            className={classes.searchButton}
          >
            {loading ? <ActivityIndicator /> : <i className="fa fa-search"></i>}
          </button>
        </div>
      </div>
      <div className={classes.closeButton} onClick={handleChildClick}>
        <i className="fa fa-close"></i>
      </div>
    </div>
  );
};

export default Search;
