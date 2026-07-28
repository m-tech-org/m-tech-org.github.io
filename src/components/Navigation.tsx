import { Menu, X, Home as HomeIcon, Wrench, Briefcase, Package, Info, Mail } from 'lucide-react';
import { useState, useEffect } from 'react';
import { navItems } from '../data/navigation.ts';
import styles from './navigation.module.css';

const iconMap: Record<string, any> = {
  Home: HomeIcon,
  Wrench,
  Briefcase,
  Package,
  Info,
  Mail,
};

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState('');

  useEffect(() => {
    const updateHash = () => {
      setCurrentHash(window.location.hash || '#');
    };

    updateHash();
    window.addEventListener('hashchange', updateHash);

    return () => window.removeEventListener('hashchange', updateHash);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isActive = (hash: string) => currentHash === hash;

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen]);

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
          {navItems.map((item) => {
            const IconComponent = iconMap[item.icon];
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={closeMenu}
                  className={isActive(item.href) ? `${styles.link} ${styles.active}` : styles.link}
                >
                  <IconComponent className={styles.linkIcon} />
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      {isOpen && <div className={styles.overlay} onClick={closeMenu} />}
    </header>
  );
}
