import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Experiencia from "./pages/Experiencia";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Scroll/>
      <main className="app-shell">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experiencia" element={<Experiencia />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;