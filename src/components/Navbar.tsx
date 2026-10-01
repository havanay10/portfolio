import { useEffect, useState } from "react";
import "./Navbar.css"

function Navbar() {
  // État permettant de savoir si le menu est ouvert
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Fonction appelée lorsqu'on clique sur le bouton
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Détecte le scroll pour ajouter la bordure
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        ARNOT
      </div>
      {/* Bouton hamburger */}
      <button className="menu-button" onClick={toggleMenu}>{menuOpen ? "✕" : "☰"}</button>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li><a href="#hero" onClick={() => setMenuOpen(false)}>Accueil</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>À propos</a></li>
        <li><a href="#skills" onClick={() => setMenuOpen(false)}>Compétences</a></li>
        <li><a href="#projet" onClick={() => setMenuOpen(false)}>Projets</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;