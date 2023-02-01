import React from 'react'
import Search from '../components/Search';
import classes from './Home.module.css';

const Home = () => {
  return (
        <>
        <div className={classes.home}>
            <h2 className={classes.home}>Restaurant Review App</h2>
            <p className={classes.home}>Search For a Restaurant and Review</p>
            <Search/>
        </div>
    </>
  )
}

export default Home