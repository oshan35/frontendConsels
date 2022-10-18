import React, { useState } from "react";
import { ReactComponent as CloseMenu } from "../../assets/x.svg";
import { ReactComponent as MenuIcon } from "../../assets/menu.svg";
import Logo from "../../assets/conLogo.png";
import "./Navbar.css";
import { Link } from "react-router-dom";


const NavigationBar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  return (
    <div className="header">
      <div className="logo-nav">
        <div className="logo-container">
          <Link to={`/`}>
            <img className="logo" src={Logo}  alt="logo"/>
          </Link>
        </div>
        <ul className={click ? "nav-options active" : "nav-options"}>
          <li className="option" onClick={closeMobileMenu}>
            <Link to={`/`}>Home</Link>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link to={`/about`}>About</Link>
          </li>

          <li className="option" onClick={closeMobileMenu}>
            <Link to={`/volunteers`}>Volunteers</Link>
          </li>
        </ul>
      </div>

      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <CloseMenu className="menu-icon" />
        ) : (
          <MenuIcon className="menu-icon" />
        )}
      </div>
    </div>
  );
};

export default NavigationBar;
