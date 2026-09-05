import React from 'react';
import styles from './Footer.module.css';
import { CONTACT, BOT_URL } from '../config';

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
            Daily APPSC Group 1 &amp; 2 practice questions, delivered to a private Telegram group.
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
            <li><a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a></li>
            <li><a href={`tel:${CONTACT.phone.replace(/\s+/g, '')}`}>{CONTACT.phone}</a></li>
            <li><a href={BOT_URL} target="_blank" rel="noopener noreferrer">Telegram bot</a></li>
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
        <p>{CONTACT.address}</p>
        <p>Copyright &copy; {new Date().getFullYear()} sadhanaappsc.in - All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
