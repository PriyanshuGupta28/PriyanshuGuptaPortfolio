import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <div className="firstName">Priyanshu </div>
          <div className="lastName">Gupta</div>
        </div>
        <div className="rightNav">
          <div className="resume">My Resume</div>
          <div className="menu">
            <Hamburger />
          </div>
        </div>
        <Link to={"/project"}>project</Link>
      </nav>
    </div>
  );
};

export default Navbar;
