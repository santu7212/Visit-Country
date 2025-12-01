import React from "react";
import Header from "../ui/Header";
import Footer from "../ui/Footer";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
    {/* <div className="min-h-screen bg-[#0B1120] text-white"> */}

    
      <Header />
      <Outlet />
      <Footer />
      {/* </div> */}
    </>
  );
};

export default AppLayout;
