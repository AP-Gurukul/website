import React from 'react';

const Refund: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 20px 80px', lineHeight: 1.6, color: '#333' }}>
      <h1 style={{ fontSize: 36, marginBottom: 8, letterSpacing: '-1px' }}>Refund & Cancellation Policy</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Effective as of 2026-06-23</p>

      <p>Thank you for choosing the Sadhana APPSC app, operated by Praneeth (the "Service Provider"). We strive to ensure our users have a rewarding experience while they are discovering, evaluating, and purchasing our educational content and subscriptions.</p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>1. No Refund Policy</h2>
      <p>Given the digital nature of our educational content, study materials, and premium subscriptions, <strong>we do not offer any refunds or cancellations once a purchase is made.</strong></p>
      
      <p>All sales are strictly final. Once you have paid for a course, mock test, or premium subscription and gained access to the digital materials, the transaction cannot be reversed, and no amounts will be returned, regardless of whether you are satisfied with the course or not.</p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>2. Subscription Cancellations</h2>
      <p>If you are on a recurring subscription plan, you may cancel your auto-renewal at any time through your account settings or through the respective app store (Google Play Store or Apple App Store) where the subscription was initiated.</p>
      
      <p>Cancellation will stop any future billing, but <strong>no prorated refunds will be issued for the current or previous billing cycles</strong>. You will continue to have access to your premium features until the end of your current paid billing period.</p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>3. Exceptional Circumstances</h2>
      <p>We do not grant exceptions to this no-refund policy, except in the rare case of technical errors on our end (such as duplicate billing for the same transaction). In such cases, please contact our support team immediately for resolution.</p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>4. Third-Party Purchases</h2>
      <p>If you purchased your subscription through a third party (such as the Apple App Store or Google Play Store), the refund policy of that specific platform will apply. The Service Provider cannot directly process refunds for purchases made through Apple or Google's payment gateways. You will need to request the refund directly through your Apple ID or Google Play account.</p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>5. Changes to this Policy</h2>
      <p>The Service Provider reserves the right to modify this refund policy at any time. Any changes will be posted on this page. If you continue to use the Application after those changes are in effect, you agree to the revised policy.</p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Contact Us</h2>
      <p>If you have any questions or require assistance regarding our refund policy, please contact us at <strong>appscsadhana@gmail.com</strong>.</p>
    </div>
  );
};

export default Refund;
