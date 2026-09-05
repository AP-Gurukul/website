import React from 'react';
import { CONTACT, BOT_HANDLE } from '../config';

// The policy below is deliberately strict: all sales are final. What changed
// from the earlier version is only what was factually wrong — it described
// purchases made through the Apple App Store and Google Play, and told users to
// cancel through their app-store account. Neither exists here. Passes are sold
// through Telegram and charged by Razorpay, and a subscription is cancelled by
// sending /cancel to the bot. A policy that points a paying student at the
// wrong cancellation route is the kind of thing that becomes a chargeback.

const Refund: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 20px 80px', lineHeight: 1.6, color: '#333' }}>
      <h1 style={{ fontSize: 36, marginBottom: 8, letterSpacing: '-1px' }}>Refund &amp; Cancellation Policy</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Effective as of 2026-09-05</p>

      <p>
        Thank you for choosing Sadhana APPSC, operated by {CONTACT.name} (the &quot;Service Provider&quot;).
        We sell access to a private Telegram study group. This policy explains what happens when you
        want to cancel, and when a refund is and is not possible.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>1. What you are buying</h2>
      <p>
        A pass gives you access to our private Telegram group for a stated period. Access begins
        immediately after a successful payment, when our bot sends you a single-use invite link.
        Because access is granted at once and content is delivered continuously from that moment,
        a pass is a digital service that is consumed as it runs.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>2. No refund policy</h2>
      <p>
        Given the digital nature of our educational content and the fact that access is delivered
        immediately, <strong>we do not offer refunds once a purchase is made.</strong>
      </p>
      <p>
        All sales are strictly final. Once you have paid for a pass and been sent your invite link,
        the transaction cannot be reversed and no amounts will be returned, regardless of whether
        you are satisfied with the content, and regardless of how much of the period you use.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>3. Cancelling an auto-renewing pass</h2>
      <p>
        The <strong>Monthly Auto-Pay</strong> pass renews itself every 30 days until you cancel it.
        You can cancel at any time by sending <strong>/cancel</strong> to our Telegram bot
        at <strong>{BOT_HANDLE}</strong>.
      </p>
      <p>
        Cancellation stops all future billing. <strong>No prorated refund is issued for the current
        or any previous billing period</strong> — you keep access until the end of the period you
        have already paid for, and are not charged again after that.
      </p>
      <p>
        The two one-time passes (30-Day Sprint and Target APPSC 2026) do not renew, so there is
        nothing to cancel. They simply end on their expiry date.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>4. Exceptional circumstances</h2>
      <p>
        We do not grant exceptions to this no-refund policy, except where the fault is a technical
        error on our side. That means:
      </p>
      <ul>
        <li>You were billed more than once for the same pass.</li>
        <li>You were charged after we confirmed your cancellation.</li>
      </ul>
      <p>
        In those cases, contact us immediately and we will resolve it. Approved refunds are
        submitted to Razorpay straight away and typically reach your account within 5–7 working
        days, depending on your bank.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>5. Payments</h2>
      <p>
        All payments are processed by <strong>Razorpay</strong>. We never see or store your card,
        UPI or bank details. Prices shown are in Indian Rupees and are the total payable, with no
        additional charges at checkout.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>6. Changes to this policy</h2>
      <p>
        The Service Provider reserves the right to modify this refund policy at any time. Any
        changes will be posted on this page. If you continue to use the service after those changes
        are in effect, you agree to the revised policy.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Contact us</h2>
      <p>If you have any questions or need assistance regarding this policy, please contact us:</p>
      <ul>
        <li><strong>Email:</strong> {CONTACT.email}</li>
        <li><strong>Phone:</strong> {CONTACT.phone}</li>
        <li><strong>Address:</strong> {CONTACT.address}</li>
      </ul>
    </div>
  );
};

export default Refund;
