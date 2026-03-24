import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Experiencia from "./pages/Experiencia";

function App() {
  return (
    <>
      <Navbar/>
      <Scroll/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/experiencia" element={<Experiencia />} />
      </Routes>
    </>
  );
}

export default App;