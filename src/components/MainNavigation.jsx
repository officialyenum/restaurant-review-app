import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './MainNavigation.module.css'

const MainNavigation = () => {
  return (
    <header className={classes.header}>
        {/* <h1>Restaurant Review</h1> */}
        <nav>
            <ul className={classes.list}> 
                <li>
                    <NavLink to='/' className={({ isActive }) => 
                        isActive ? classes.active : undefined
                        }
                        end
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/history' className={({ isActive }) => 
                        isActive ? classes.active : undefined
                        }
                    >
                        History
                    </NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}

export default MainNavigation