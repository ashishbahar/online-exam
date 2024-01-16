import React from "react";
// import { NavLink } from 'react-router-dom';
import { FaHome } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { FaHandPointRight } from "react-icons/fa";
import { VscBook } from "react-icons/vsc";
// import '../Style/Style.css'

const NavBar = () => {
  return (
    <div className="Navbar flex justify-between items-center px-10 py-5 fixed w-[100%] bg-[#FFF7F4]">
      <div className="Navlogo" style={{color:"#FF5300"}}>
        <h2 className=" text-3xl font-medium">Quiz<span className="text-black"> time</span></h2>
      </div>

      <div className="Navmenu px-10">
        <ul>
          <li className="flex list-none">
            <a className="nav_icons"><div className=" Nav_icon_1"><FaHome /></div>Home</a>

            <a href=""  className="nav_icons"><div  className=" Nav_icon_1"><IoPerson /></div>About</a>

            <a  className="nav_icons"><div  className=" Nav_icon_1"><VscBook /></div>Quiz</a>

            <a  className="nav_icons"><div className=" Nav_icon_1"><FaHandPointRight /></div>Practise</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
