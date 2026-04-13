import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { FiMenu, FiMoon, FiSun, FiX } from "react-icons/fi";
import { getLocaleContent } from "../content/portfolioContent";
import { useLocale } from "../contexts/LocaleContext";

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const { locale, setLocale } = useLocale();
  const content = getLocaleContent(locale);
  const navContent = content.navbar;

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname, location.hash, locale]);

  return (
    <nav className={`site-nav ${menuOpen ? "site-nav--open" : ""}`}>
      <div className="site-nav__inner">
        <div className="site-nav__actions">
          <button
            type="button"
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label={theme === "dark" ? navContent.themeToggle.light : navContent.themeToggle.dark}
            title={theme === "dark" ? navContent.themeToggle.lightTitle : navContent.themeToggle.darkTitle}
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
          <button
            type="button"
            className="locale-toggle locale-toggle--single"
            onClick={() => setLocale(locale === "pt-BR" ? "en-US" : "pt-BR")}
            aria-label={navContent.languageLabel}
            title={locale === "pt-BR" ? navContent.languageOptions.enUS : navContent.languageOptions.ptBR}
          >
            {locale === "pt-BR" ? "PT" : "EN"}
          </button>
          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen((value) => !value)}
            aria-expanded={menuOpen}
            aria-label={navContent.menuLabel}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        <div className={`nav-links ${menuOpen ? "active" : ""}`}>
          <Link to="/#hero">{navContent.links.home}</Link>
          <Link to="/#about">{navContent.links.about}</Link>
          <Link to="/#skills">{navContent.links.skills}</Link>
          <Link to="/#projects">{navContent.links.projects}</Link>
          <Link to="/#contact">{navContent.links.contact}</Link>
          <Link to="/experiencia">{navContent.links.experience}</Link>
        </div>
      </div>
    </nav>
  );
}