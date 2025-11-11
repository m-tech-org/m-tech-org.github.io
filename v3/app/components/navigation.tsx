import { Link, NavLink } from "react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import styles from "./navigation.module.css";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link to="/" className={styles.logo}>
          <img src="/logo.svg" alt="M-Tech" className={styles.logoImage} />
          <span>M-Tech</span>
        </Link>
        
        <button 
          className={styles.burger} 
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className={`${styles.links} ${isOpen ? styles.open : ''}`}>
          <li>
            <NavLink
              to="/"
              end
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/projects"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={closeMenu}
              className={({ isActive }) => (isActive ? `${styles.link} ${styles.active}` : styles.link)}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
}
