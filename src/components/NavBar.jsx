import React from "react";
// import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
import { Link, NavLink } from "react-router-dom";
// import '../Style/Style.css'

const NavBar = () => {
  return (
    <div className="Navbar flex relative justify-between items-center px-10 py-5 fixed w-[100%] bg-[#FFF7F4]">
      <div className="Navlogo" style={{ color: "#FF5300" }}>
        <NavLink to="/">
          <h2 className=" cursor-pointer text-3xl font-medium">
            Quiz<span className="text-black"> time</span>
          </h2>
        </NavLink>
      </div>

      <div className="Navmenu px-10">
        <ul>
          <li className="flex list-none">
            <NavLink to="/" className="nav_icons">
              <div className="Nav_icon_1">
                <FaHome />
              </div>
              Home
            </NavLink>

            <NavLink className="nav_icons">
              <div className="Nav_icon_1">
                <IoPerson />
              </div>
              About
            </NavLink>

            <NavLink className="nav_icons">
              <div className="Nav_icon_1">
                <VscBook />
              </div>
              Quiz
            </NavLink>

            <NavLink to="/Quiz" className="nav_icons">
              <div className=" Nav_icon_1">
                <FaHandPointRight />
              </div>
              Practice
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
