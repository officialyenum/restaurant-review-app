import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { authActions } from "../store/slices/auth.slice";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(authActions.logoutUser());
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classes.wrapper}>
      <header className={classes.header}>
        <div className={classes.header_middle}>
          <h2>
            <NavLink to="/">Restaurant Hygiene Review</NavLink>
          </h2>
          <nav>
            <div
              className={classes.menuIconContainer}
              onClick={() => setIsOpen(true)}
            >
              <i className="fa fa-search"></i>
            </div>
            <ul className={`${classes.list} ${isOpen ? classes.navOpen : ""}`}>
              <div
                className={classes.closeIconContainer}
                onClick={() => setIsOpen(false)}
              >
                <i className="fa fa-search"></i>
              </div>
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Home
                </NavLink>
              </li>
              {currentUser && (
                <li>
                  <div onClick={logoutHandler}>Logout</div>
                </li>
              )}
              {!currentUser && (
                <>
                  <li>
                    <NavLink
                      to="/login"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Login
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/register"
                      className={({ isActive }) =>
                        isActive ? classes.active : undefined
                      }
                    >
                      Register
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </nav>
        </div>
      </header>
    </div>
  );
};

export default MainNavigation;
