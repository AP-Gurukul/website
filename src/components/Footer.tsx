import React from 'react';
import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoDot}></span>
            <span className={styles.logoText}>Sadhana APPSC</span>
          </div>
          <p className={styles.tagline}>
            The ultra-premium preparation app for APPSC Group 1 and 2 aspirants.
          </p>
        </div>

        <div className={styles.links}>
          <h4>Product</h4>
          <ul>
            <li><a href="#features">Features</a></li>
            <li><a href="#subjects">Syllabus</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#outcomes">Outcomes</a></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Support</h4>
          <ul>
            <li><a href="mailto:appscsadhana@gmail.com">Contact Us</a></li>
            <li><a href="mailto:appscsadhana@gmail.com">Help Center</a></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/refund">Refund Policy</a></li>
          </ul>
        </div>

      </div>
      
      <div className={styles.bottom}>
        <p>Copyright &copy; {new Date().getFullYear()} sadhanaappsc.in - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
