import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const Navbar: React.FC = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add scroll event listener for glassmorphism enhancement on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileOpen(false);

    if (window.location.pathname !== '/') {
      window.location.href = targetId === 'hero' ? '/' : `/#${targetId}`;
      return;
    }

    const target = document.getElementById(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 70;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    } else if (targetId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <a href="#" className={styles.logo} onClick={(e) => handleSmoothScroll(e, 'hero')}>
        <span className={styles.logoDot}></span>
        <span className={styles.logoText}>APPSC Sadhana</span>
      </a>

      <div className={`${styles.links} ${isMobileOpen ? styles.active : ''}`}>
        <a href="#features" onClick={(e) => handleSmoothScroll(e, 'features')}>Features</a>
        <a href="#subjects" onClick={(e) => handleSmoothScroll(e, 'subjects')}>Subjects</a>
        <a href="#pricing" onClick={(e) => handleSmoothScroll(e, 'pricing')}>Plans</a>
        <a href="#faq" onClick={(e) => handleSmoothScroll(e, 'faq')}>FAQ</a>
      </div>

      <a href="#cta" className={styles.cta} onClick={(e) => handleSmoothScroll(e, 'cta')}>
        Start Free
      </a>

      <button 
        className={styles.hamburger} 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        aria-label="Toggle navigation menu"
      >
        <span className={isMobileOpen ? styles.barOpenTop : ''}></span>
        <span className={isMobileOpen ? styles.barOpenMiddle : ''}></span>
        <span className={isMobileOpen ? styles.barOpenBottom : ''}></span>
      </button>
    </nav>
  );
};

export default Navbar;
