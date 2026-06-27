import styles from './Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        
        <div className={styles.brand}>
          <div className={styles.logo}>
            <span className={styles.logoDot}></span>
            <span className={styles.logoText}>APPSC Sadhana</span>
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
          <h4>Company</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        <div className={styles.links}>
          <h4>Legal</h4>
          <ul>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">Refund Policy</a></li>
          </ul>
        </div>

      </div>
      
      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} APPSC Sadhana. All rights reserved.</p>
        <p>Built for Andhra Pradesh.</p>
      </div>
    </footer>
  );
};

export default Footer;
