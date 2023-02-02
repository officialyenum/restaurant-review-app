import React from 'react'
import RecordCard from './RecordCard';
import classes from './RecordList.module.css';

const RecordList = ({records}) => {
  return (
    <>
        <h2>Restaurant List</h2>
        <div className={classes.container}>
            {records.length !== 0 ? (
              records.map((record) => (
                <RecordCard
                  key={record.id}
                  record={record}
                />
              ))
            ) : (<p>No Restaurants</p>)}
        </div>
    </>
  )
}

export default RecordList