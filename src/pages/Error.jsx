import React from 'react'
import MainNavigation from '../components/MainNavigation'
// import classes from './Error.module.css'

const Error = () => {
  return <>
    <MainNavigation/>
    <main>
        <h1>An Error Occurred!</h1>
        <p>Could not find Page!</p>
    </main>
  </>

}

export default Error