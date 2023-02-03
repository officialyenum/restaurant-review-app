import React from 'react'
import classes from './ReviewForm.module.css'

export const Star = ({ star, onClick }) => {
    const onClickStar = () => {
        onClick(star.id)
    }
  return (
    <>
    <svg className={classes.star} id={star.id} viewBox="0 12.705 512 486.59" x="0px" y="0px" xmlSpace="preserve" style={{fill: star.color}} onClick={onClickStar}>
        <polygon points="256.814,12.705 317.205,198.566 512.631,198.566 354.529,313.435 414.918,499.295 256.814,384.427 98.713,499.295 159.102,313.435 1,198.566 196.426,198.566"></polygon>
    </svg>
    </>
  )
}
