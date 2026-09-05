import React from 'react';
import { CONTACT, BOT_HANDLE } from '../config';

// Rewritten to describe the service that actually exists: a private Telegram
// study group sold through a bot and charged by Razorpay.
//
// The previous version was a generic mobile-app template. It licensed you to
// "install the Application on a mobile device", listed AdMob and Firebase
// Crashlytics as third-party services, advised against jailbreaking your phone,
// disclaimed responsibility for roaming charges and a flat battery, and carried
// EU Digital Services Act provisions. None of that describes this business, and
// terms that describe a different product are worth little when they are needed.
//
// The legal scaffolding worth keeping — limitation of liability, indemnity,
// severability, entire agreement — is kept and pointed at the real service.

const Terms: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 20px 80px', lineHeight: 1.6, color: '#333' }}>
      <h1 style={{ fontSize: 36, marginBottom: 8, letterSpacing: '-1px' }}>Terms &amp; Conditions</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Effective as of 2026-09-05</p>

      <p>
        These terms apply to the Sadhana APPSC website and to the private Telegram study group
        operated by {CONTACT.name} (the &quot;Service Provider&quot;, &quot;we&quot;), together the
        &quot;Service&quot;. By buying a pass or joining the group, you agree to these terms. Please
        read them before you buy.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>What we provide</h2>
      <p>
        We post curated practice questions for the APPSC Group 1 and Group 2 examinations, with
        answers and explanations, to a private Telegram group. A paid pass gives one person access
        to that group for the period stated at the time of purchase.
      </p>
      <p>
        We are an independent private service. We are not affiliated with, endorsed by, or connected
        to the Andhra Pradesh Public Service Commission or any government body.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Eligibility</h2>
      <p>
        You must be at least 18 years old, or have a parent or legal guardian accept these terms on
        your behalf. You must be legally permitted to use the Service in your jurisdiction, and you
        need a Telegram account to receive access.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Your access</h2>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li>A pass is for <strong>one person</strong>. Invite links are single-use and tied to your purchase.</li>
        <li>Do not share, forward or resell your invite link. A shared link gives away your own seat rather than creating a second one.</li>
        <li>You must message our bot at least once so it can send you your link. Telegram does not permit a bot to message you first.</li>
        <li>Access is tied to your Telegram account. Keep it, or contact us before changing it.</li>
      </ul>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Payments</h2>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li>All payments are processed by <strong>Razorpay</strong>. We never see or store your card, UPI or bank details.</li>
        <li>Prices are shown in Indian Rupees and are the total payable. There are no additional charges at checkout.</li>
        <li>The Monthly Auto-Pay pass renews automatically every 30 days until cancelled. Cancel at any time by sending <strong>/cancel</strong> to <strong>{BOT_HANDLE}</strong>.</li>
        <li>Renewing early never costs you days: a new period is added to the end of your current one, not from the date you paid.</li>
        <li>We may change prices for future purchases. A change never affects a pass you have already bought.</li>
        <li><strong>All sales are final.</strong> See our <a href="/refund">Refund &amp; Cancellation Policy</a>.</li>
      </ul>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Content and intellectual property</h2>
      <p>
        The questions, explanations and material we post are our own work or are used with
        permission, and are provided for your personal study only. We retain all intellectual
        property rights in them, and in our name, logo and branding.
      </p>
      <p>
        You may not copy, screenshot for distribution, republish, sell, or otherwise share our
        material outside the group — including in other study groups, channels, or applications.
        Doing so ends your access without a refund.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Conduct in the group</h2>
      <p>We may remove you from the group, without a refund, for:</p>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li>Sharing your invite link or your access with anyone else.</li>
        <li>Redistributing our content outside the group.</li>
        <li>Spam, advertising, or promoting other services.</li>
        <li>Harassment, abuse, hate speech, or threats directed at any member.</li>
        <li>Posting illegal content, or content that infringes someone else&apos;s rights.</li>
        <li>Attempting to disrupt, attack, or gain unauthorised access to our systems.</li>
      </ul>
      <p>
        Anything you post in the group is visible to other members. Do not post other people&apos;s
        personal information. If you believe another member has posted something that breaches these
        terms, report it to us at <strong>{CONTACT.email}</strong> with enough detail for us to
        identify it. Where a removal decision affects you, you may write to the same address and we
        will review it and explain the outcome.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Availability</h2>
      <p>
        We aim to post daily, but we do not guarantee uninterrupted service. The group depends on
        Telegram and payments depend on Razorpay; outages in either are outside our control. We may
        modify or discontinue the Service. If we stop it permanently, we will refund the unused
        portion of any pass still running.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>No guarantee of results</h2>
      <p>
        We provide practice material. We do not guarantee any examination result, rank, score, or
        selection. Your outcome depends on your own preparation.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Limitation of liability</h2>
      <p>
        To the fullest extent permitted by law, we are not liable for any indirect, incidental,
        special, consequential or punitive damages, including lost profits or data loss, even if
        advised of the possibility.
      </p>
      <p>We retain full liability for:</p>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li>Death or personal injury caused by negligence</li>
        <li>Fraud or fraudulent misrepresentation</li>
        <li>Any other liability that cannot lawfully be excluded or limited</li>
      </ul>
      <p>
        To the fullest extent permitted by law, our total liability for any claim will not exceed the
        amount you paid us in the 12 months before the claim, or the minimum required by applicable
        law, whichever is greater. Nothing in these terms limits any rights you have under consumer
        protection laws that cannot lawfully be excluded.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Indemnification</h2>
      <p>
        To the fullest extent permitted by law, you agree to indemnify and hold us harmless from
        claims, liabilities, damages, losses and expenses, including reasonable legal fees, arising
        from your breach of these terms or your intentional misuse of the Service, including content
        you post in breach of these terms. This does not apply to claims arising from our own
        negligence, our breach of these terms, or our violation of applicable law.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Governing law and jurisdiction</h2>
      <p>
        These terms are governed by the laws of India. The courts of Andhra Pradesh have exclusive
        jurisdiction over any dispute arising from them, except where mandatory consumer protection
        law gives you the right to bring a claim elsewhere.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Severability</h2>
      <p>
        If any provision of these terms is held invalid, illegal or unenforceable, it will be
        modified to the minimum extent necessary to make it enforceable, and the remaining
        provisions will remain in full force.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Entire agreement</h2>
      <p>
        These terms, together with the <a href="/privacy">Privacy Policy</a> and the{' '}
        <a href="/refund">Refund &amp; Cancellation Policy</a>, are the entire agreement between you
        and us regarding the Service, superseding any prior understanding.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Changes to these terms</h2>
      <p>
        We may update these terms. The effective date above shows when they last changed, and
        meaningful changes will be announced in the group. Continuing to use the Service after a
        change means you accept it. Previous versions are available on request.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Contact us</h2>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li><strong>Email:</strong> {CONTACT.email}</li>
        <li><strong>Phone:</strong> {CONTACT.phone}</li>
        <li><strong>Address:</strong> {CONTACT.address}</li>
      </ul>
    </div>
  );
};

export default Terms;
