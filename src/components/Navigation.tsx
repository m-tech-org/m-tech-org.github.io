import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import styles from './navigation.module.css';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.pathname || '');
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);

    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (hash: string) => currentHash === hash;

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="#" className={styles.logo}>
          <img src="/logo.svg" alt="M-Tech" className={styles.logoImage} />
          <span>M-Tech</span>
        </a>

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
            <a
              href="#"
              onClick={closeMenu}
              className={isActive('#') ? `${styles.link} ${styles.active}` : styles.link}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={closeMenu}
              className={isActive('#services') ? `${styles.link} ${styles.active}` : styles.link}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              onClick={closeMenu}
              className={isActive('#projects') ? `${styles.link} ${styles.active}` : styles.link}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#about"
              onClick={closeMenu}
              className={isActive('#about') ? `${styles.link} ${styles.active}` : styles.link}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={closeMenu}
              className={isActive('#contact') ? `${styles.link} ${styles.active}` : styles.link}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
}
