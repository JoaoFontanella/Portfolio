import { useEffect, useMemo, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Scroll from "./components/Scroll";
import Experiencia from "./pages/Experiencia";
import Footer from "./components/Footer";
import { LocaleProvider } from "./contexts/LocaleContext";

const THEME_KEY = "portfolio-theme";

function AppShell() {
  const defaultTheme = useMemo(() => {
    if (typeof window === "undefined") {
      return "dark";
    }

    const storedTheme = window.localStorage.getItem(THEME_KEY);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }

    return window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
  }, []);

  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    document.documentElement.style.colorScheme = theme;
    window.localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "dark" ? "light" : "dark"));
  };

  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
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

function App() {
  return (
    <LocaleProvider>
      <AppShell />
    </LocaleProvider>
  );
}

export default App;