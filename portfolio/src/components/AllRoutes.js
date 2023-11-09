import React, { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Project from "./Project";
import { AnimatePresence } from "framer-motion";
import Navbar from "./Navbar";

const AllRoutes = () => {
  const location = useLocation();

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        <Navbar className={isSticky ? "navbar sticky" : "navbar"} />
        <Routes location={location} key={location?.pathname}>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/project" element={<Project />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default AllRoutes;
