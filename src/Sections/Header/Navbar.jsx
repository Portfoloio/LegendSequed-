import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import ToggleTheme from "../../Components/Buttons/ToggleTheme";
import "./style.css";
//sidbar

import * as AiIcons from "react-icons/ai";
import { Link, NavLink } from "react-router-dom";
import { SidebarData } from "./SidbarData";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    padding:0;
    margin:0;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    width: 100%;
    font-family: BlinkMacSystemFont, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    transition: all 0.25s linear;
  }
  i,li,h1 {
    color: ${({ theme }) => theme.text};
  }
  .navbar-sticky {
    background: ${({ theme }) => theme.body};
  }
  `;

//function Sidebar

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
  const [showicon, setShow] = useState("");
  const [active, setActive] = useState({
    menu: false,
    nav: false,
  });

  return (
    <IconContext.Provider value={{ color: "#fff", width: "33px" }}>
      <NavLink to="#" className="menu-bars">
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
      </NavLink>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items">
          {SidebarData.map((item, index) => {
            return (
              <li key={index} className={item.cName}>
                <NavLink to={item.path} activeStyle={{ color: "#0dd7f7" }}>
                  <span>
                    {showicon === "123" && <i className="fas fa-check"></i>}
                    {item.title === "Home" ? item.title : item.title}
                  </span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>
    </IconContext.Provider>
  );
}
//function Navbar
// themes of page
const darkTheme = {
  body: "#E2E2E2",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#241d1d, #232323)",
  backgroundColor: "#212529",
};

const lightTheme = {
  body: "#363537",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#0DD7F7, #79D7ED)",
  backgroundColor: "#0dd7f7",
};
const Navbar = () => {
  const [theme, setTheme] = useState("light");
  const [scroll, setScroll] = useState(false);

  const scrollChangeNav = () => {
    window.scrollY >= 80 ? setScroll(true) : setScroll(false);
  };
  window.addEventListener("scroll", scrollChangeNav);

  return (
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
            sayhai@domain.com
          </li>
        </ul>
      </div>
      <Router>
        <div id="navbar--toggle-sidebar">
          <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
            <GlobalStyles />
            <ToggleTheme theme={theme} setTheme={setTheme} />
          </ThemeProvider>
          <Sidebar />
        </div>
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
