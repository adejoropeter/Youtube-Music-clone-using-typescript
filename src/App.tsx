import React, { useState, useRef, useEffect } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="text-white h-screen overflow-hidden flex flex-col relative  w-[100vw] ">
      <Header />
      <div className="w-full h-[80%] flex ">
        <Navbar /> 

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
