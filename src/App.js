import "./App.css";
import Navbar from "./Sections/Header/Navbar";
import Welcome from "./Sections/Header/Welcome";
import Portfolio from "./Sections/Portfolio/index";
import Testimonial from "./Sections/Testimonial/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Welcome />
      <Portfolio />
      <Testimonial />
    </div>
  );
}

export default App;
