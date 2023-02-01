import React from 'react'
import classes from './Search.module.css'


const Search = () => {
  return (
    <div className={classes.wrap}>
        <div className={classes.search}>
            <input type="text" className={classes.searchTerm} placeholder="Need a to Review a Restaurant ?"/>
            <button type="submit" className={classes.searchButton}>
                <i class="fa fa-search"></i>
            </button>
        </div>
    </div>
  )
}

export default Search
