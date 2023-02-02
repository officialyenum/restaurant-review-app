import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { searchRecords } from '../store/actions/record.action';
import RecordList from './RecordList';
import classes from './Search.module.css'


const Search = () => {
    const [search, setSearch] = useState('');
    const records = useSelector(state => state.record.records);
    const [response, setResponse] = useState({});
    const dispatch = useDispatch();
    const searchHandler = async () => {
        if (!search || search === '') {
            setResponse("Search is Empty");
            return
        }
        dispatch(searchRecords(search));
        setResponse("Success");
    }
    console.log(response);
  return (
    <div className={classes.wrap}>
        <div className={classes.search}>
            <input 
                type="text" 
                className={classes.searchTerm} 
                placeholder="Search By Restaurant Name or Name ?"
                value={search} 
                onChange={(e) => setSearch(e.target.value)}   
            />
            <button onClick={searchHandler} type="submit" className={classes.searchButton}>
                <i className="fa fa-search"></i>
            </button>
            {/* {response} */}
        </div>
        <RecordList records={records}/>
    </div>
  )
}

export default Search
