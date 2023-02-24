import React from "react";
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
  return (
    <header className={classes.header}>
     <div className={classes.header_middle}>
     <h2>
     <NavLink to="/">Restaurant Review</NavLink>
   </h2>
   <nav>
     <ul className={classes.list}>
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
           <button onClick={logoutHandler}>Logout</button>
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
   </nav></div>
    </header>
  );
};

export default MainNavigation;
