import React, { useEffect, useState } from "react";

import "./Navbar.css";

import menuicon from "../../assets//menu-icon.png";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setSticky(true) : setSticky(false);
    });
  }, []);

  const [mobileMenu, setMobileMenu] = useState(false);

  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };
  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <div className="logo">
        <h2>EduNova</h2>
      </div>
      <ul className={mobileMenu ? "" : "hide-menu"}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Programs</li>
        <li>Blog</li>
        <li className="btn light-btn">Contact Us</li>
      </ul>
      <img src={menuicon} alt="" className="menuicon" onClick={toggleMenu} />
    </nav>
  );
};

export default Navbar;
