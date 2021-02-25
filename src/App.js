import "./App.css";
import Navbar from "./Sections/Header/Navbar";
import useSticky from "./Hooks/useSticky";
import Welcome from "./Sections/Header/Welcome";
import Portfolio from "./Sections/Portfolio/index";
import Testimonial from "./Sections/Testimonial/index";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <div className="App">
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
