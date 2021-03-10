import { useState } from "react";
import { ThemeProvider } from "styled-components";
import ToggleTheme from "../../Components/Buttons/ToggleTheme";
import "./style.css";
//sidbar

import { NavLink } from "react-router-dom";
import { SidebarData } from "./SidbarData";
import { IconContext } from "react-icons";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { darkTheme, lightTheme } from "../../App";

//function Sidebar

export function Sidebar() {
  const [sidebar, setSidebar] = useState(false);
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
                <NavLink
                  to={item.path}
                  activeStyle={{
                    color: item.title !== "Home" ? "#0dd7f7" : "",
                  }}
                >
                  <span>
                    {/* {showicon === "123" && <i className="fas fa-check"></i>} */}
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
              sayhai@domain.com
            </li>
          </ul>
        </div>
        <Router>
          <div id="navbar--toggle-sidebar">
            <ToggleTheme theme={props.theme} setTheme={props.setTheme} />
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
    </ThemeProvider>
  );
};
export default Navbar;
