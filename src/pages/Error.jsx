import React from "react";
import { Footer } from "../components/Footer";
import MainNavigation from "../components/MainNavigation";
// import classes from './Error.module.css'

const Error = () => {
  return (
    <>
      <MainNavigation />
      <main
        style={{
          minHeight: "80vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h1>An Error Occurred!</h1>
        <p>Could not find Page!</p>
      </main>
      <Footer />
    </>
  );
};

export default Error;
