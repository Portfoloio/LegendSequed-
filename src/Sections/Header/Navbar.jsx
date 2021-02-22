import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import ToggleTheme from "../../Components/Buttons/ToggleTheme";
import "./style.css";
import phone from "../../images/phone.png";
import Email from "../../images/Email.png";
import geeknius1 from "../../images/geeknius1.png";
//sidbar

import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidbarData";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import BurgerMenu from "../../images/BurgerMenu.svg";
const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    height: 1000vh;
    margin: 0;
    padding: 0;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }`;

//function Sidebar

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [showicon, setShow] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff", width: "33px" }}>
        <div className="sidebar">
          <Link to="#" className="menu-bars">
            <img src={BurgerMenu} alt="BurgerMenu" onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items" onClick={showSidebar}>
            <Link to="#">
              <AiIcons.AiOutlineClose />
            </Link>

            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    <span onClick={() => setShow(!showicon)}>
                      {showicon ? <i className="fas fa-check"></i> : null}
                      {item.title}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
//function Navbar
// themes of page
const lightTheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#0DD7F7, #79D7ED)",
};

const darkTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#241d1d, #232323)",
};
const Navbar = ({ sticky }) => {
  const [theme, setTheme] = useState("light");

  return (
    <nav className={sticky ? "navbar navbar-sticky" : "navbar"}>
      <img id="logo" src={geeknius1} alt="geeknius" />
      <ul className="navbar--link">
        <li className="navbar--link-item">
          <img src={phone} alt="phone" id="phone" />
          +98 76-54-1423
        </li>
        <li className="navbar--link-item">
          <img src={Email} alt="Email" id="Email" />
          sayhai@domain.com
        </li>
        <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
          <GlobalStyles />
          <ToggleTheme theme={theme} setTheme={setTheme} />
        </ThemeProvider>
      </ul>
      <Router>
        <Sidebar />
        <Switch>
          <Route path="/Home" exact />
          <Route path="/Services" />
          <Route path="/Portfolio" />
          <Route path="/Experience" />
          <Route path="/Skills" />
          <Route path="/Testimonials" />
          <Route path="/News" />
          <Route path="/Contact" />
        </Switch>
      </Router>
    </nav>
  );
};
export default Navbar;
