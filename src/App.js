import "./App.css";
import Navbar from "./Sections/Header/Navbar";
import useSticky from "./Hooks/useSticky";
import Welcome from "./Sections/Header/Welcome";

function App() {
  const { isSticky, element } = useSticky();
  return (
    <div className="App">
      <Navbar sticky={isSticky} />
      <Welcome element={element} />
    </div>
  );
}

export default App;
