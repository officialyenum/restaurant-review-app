import React from 'react'
import classes from './RecordCard.module.css';

const RecordCard = ({record}) => {
  return (
    <>
        <div className={`${classes.panel} ${classes.active}`}>
            <div className={classes['setting-title']}>
                <i className="fa-solid fa-user"></i>
                <h3>{record.businessName} - {record.businessAddress}</h3>
            </div>
            <div className={classes['setting-content']}>
                Extra
            </div>
        </div>
    </>
  )
}

export default RecordCard