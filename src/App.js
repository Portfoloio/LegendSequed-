import { useState } from "react";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import "./App.css";
import Navbar from "./Sections/Header/Navbar";
import Welcome from "./Sections/Header/Welcome";
import Portfolio from "./Sections/Portfolio/index";
import Testimonial from "./Sections/Testimonial/index";

// themes of page
export const lightTheme = {
  body: "#f7fbfe",
  text: "#363537",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#241d1d, #232323)",
  backgroundColor: "#212529",
  sectionBgC: "#ffffff",
};

export const darkTheme = {
  body: "#202020",
  text: "#FAFAFA",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#0DD7F7, #79D7ED)",
  backgroundColor: "#0dd7f7",
  sectionBgC: "#232323",
};

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
    background: ${({ theme }) => theme.sectionBgC};
  }
  `;

function App() {
  const [theme, setTheme] = useState(localStorage.theme);

  return (
    <main className="App">
      <ThemeProvider theme={theme === "light" ? darkTheme : lightTheme}>
        <GlobalStyles />
        <Navbar theme={theme} setTheme={setTheme} />
        <Welcome />
        <Portfolio theme={theme} />
        <Testimonial />
      </ThemeProvider>
    </main>
  );
}

export default App;
