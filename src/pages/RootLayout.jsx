import React from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main style={{ minHeight: "80vh" }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default RootLayout;
