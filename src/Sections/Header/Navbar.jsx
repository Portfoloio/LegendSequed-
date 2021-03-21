import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ToggleTheme from "../../Components/Buttons/ToggleTheme";
import { Link } from "react-scroll";
import "./style.css";
//sidbar

import { SidebarData } from "./Data";
import { IconContext } from "react-icons";

import { BrowserRouter as Router } from "react-router-dom";

import { darkTheme, lightTheme } from "../../App";

//function Sidebar

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [active, setActive] = useState({
    menu: false,
    nav: false,
  });
  const [icon, setShowicon] = useState(false);
  return (
    <IconContext.Provider value={{ color: "#fff", width: "33px" }}>
      <Link to="#" className="menu-bars">
        {active.menu ? (
          <i
            className="fas fa-times"
            onClick={() => {
              setSidebar(!sidebar);
              setActive({ menu: !active.menu });
            }}
          ></i>
        ) : (
          <i
            className="fas fa-bars"
            onClick={() => {
              setSidebar(!sidebar);
              setActive({ menu: !active.menu });
            }}
          ></i>
        )}
      </Link>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li
                key={index}
                onClick={(e) => {
                  setShowicon({ icon: index });
                }}
                className={`${index === icon ? "active" : `${item.cName}`}`}
              >
                <Link
                  to={item.title}
                  // activestyle={{
                  //   color: item.title === "Home" ? "#0dd7f7" : "",
                  // }}
                  // onClick={(e) => {
                  //   setShowicon({ icon: index });
                  // }}
                  // className={`${index === icon ? "active" : `${item.cName}`}`}
                  spy={true}
                  smooth={true}
                  offset={20}
                >
                  <span>
                    {/* {showicon === item.title ? (

                    {showicon === item.title ? (

                      <i className="fas fa-check"></i>
                    ) : (
                      " "
                    )} */}

                    {/* {item.title !== activestyle
                      ? item.title
                      : item.title || <i className="fas fa-check"></i>} */}
                    {item.title}
                    {/* {item.title === "Home" ? item.title : item.title} */}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}
//function Navbar

const Navbar = (props) => {
  const [scroll, setScroll] = useState(false);

  const scrollChangeNav = () => {
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);
  };
  window.addEventListener("scroll", scrollChangeNav);

  return (
    <ThemeProvider theme={props.theme === "light" ? darkTheme : lightTheme}>
      <nav className={`navbar${scroll ? " navbar-sticky" : ""}`}>
        <div id="navbar--link-logo">
          <h1 id="logo">legend</h1>
          <ul className="navbar--link">
            <li className="navbar--link-item">
              <i className="fas fa-phone-alt"></i>
              +98 76-54-1423
            </li>
            <li className="navbar--link-item">
              <i className="fas fa-envelope-open"></i>
              Eman@domain.com
            </li>
          </ul>
        </div>
        <Router>
          <div id="navbar--toggle-sidebar">
            <ToggleTheme theme={props.theme} setTheme={props.setTheme} />
            <Sidebar />
          </div>
        </Router>
      </nav>
    </ThemeProvider>
  );
};
export default Navbar;
