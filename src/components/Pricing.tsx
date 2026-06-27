import styles from './Pricing.module.css';
import { CheckCircle2 } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <section className={`section-pad ${styles.pricing}`} id="pricing">
      
      <div className={styles.head}>
        <div className="section-label">Plans</div>
        <h2>Simple, honest pricing.</h2>
        <p className="section-sub">No hidden fees. Upgrade or cancel anytime.</p>
      </div>

      <div className={styles.grid}>
        
        {/* Starter Plan */}
        <div className={styles.card}>
          <div className={styles.tag}>Free</div>
          <div className={styles.name}>Starter</div>
          <div className={styles.price}>₹0</div>
          <div className={styles.period}>Forever free</div>
          
          <hr className={styles.divider} />
          
          <div className={styles.features}>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> 100 questions per day</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> 2 subjects</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> Basic performance report</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> 1 mock test per month</div>
          </div>
          
          <a href="#" className={styles.btn}>Get started</a>
        </div>

        {/* Pro Plan */}
        <div className={`${styles.card} ${styles.featured}`}>
          <div className={styles.tag}>Most popular</div>
          <div className={styles.name}>Pro</div>
          <div className={styles.price}>₹199<span className={styles.pricePeriod}>/mo</span></div>
          <div className={styles.period}>Billed monthly</div>
          
          <hr className={styles.divider} />
          
          <div className={styles.features}>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.checkFeatured} /> Unlimited questions</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.checkFeatured} /> All Group 1 & 2 subjects</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.checkFeatured} /> Unlimited mock tests</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.checkFeatured} /> Full analytics dashboard</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.checkFeatured} /> 10 years of past papers</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.checkFeatured} /> Bookmarks & sync</div>
          </div>
          
          <a href="#" className={styles.btnFeatured}>Start free trial</a>
        </div>

        {/* Annual Plan */}
        <div className={styles.card}>
          <div className={styles.tag}>Best value</div>
          <div className={styles.name}>Annual</div>
          <div className={styles.price}>₹999<span className={styles.pricePeriod}>/yr</span></div>
          <div className={styles.period}>Save ₹1,389</div>
          
          <hr className={styles.divider} />
          
          <div className={styles.features}>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> Everything in Pro</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> Priority feature updates</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> Exam notification alerts</div>
            <div className={styles.feature}><CheckCircle2 size={16} className={styles.check} /> Doubt support</div>
          </div>
          
          <a href="#" className={styles.btn}>Get annual plan</a>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
