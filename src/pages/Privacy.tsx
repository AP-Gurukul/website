import React from 'react';
import { CONTACT } from '../config';

// Rewritten to describe the data this service actually handles.
//
// The previous version was a mobile-app template: it said we collect your
// device's IP address and the pages you visit, listed Google Play Services,
// AdMob and Firebase Crashlytics as data recipients, and told users to uninstall
// the app to stop collection. We do none of those things and there is no app to
// uninstall. A privacy policy describing collection that does not happen is
// worse than none — it is a promise about the wrong thing.
//
// What we actually hold: a Telegram ID, which pass was bought, when it expires,
// and Razorpay's payment reference.

const Privacy: React.FC = () => {
  return (
    <div style={{ maxWidth: 800, margin: '0 auto', padding: '120px 20px 80px', lineHeight: 1.6, color: '#333' }}>
      <h1 style={{ fontSize: 36, marginBottom: 8, letterSpacing: '-1px' }}>Privacy Policy</h1>
      <p style={{ color: '#666', marginBottom: 40 }}>Effective as of 2026-09-05</p>

      <p>
        This policy explains what {CONTACT.name} (the &quot;Service Provider&quot;, &quot;we&quot;)
        collects when you use the Sadhana APPSC website and our private Telegram study group, why we
        hold it, and what you can ask us to do with it.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>In short</h2>
      <p>
        We store the minimum needed to give you what you paid for: your Telegram ID, which pass you
        bought, and when it ends. <strong>We never see or store your card, UPI or bank details</strong> —
        those go directly to Razorpay. We do not sell your data to anyone.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>What we collect</h2>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li><strong>Telegram ID and username.</strong> Telegram provides these when you message our bot. We need your ID to add you to the group and to know when your access ends.</li>
        <li><strong>Your name, if you have set one on Telegram.</strong> Used only to address you in messages.</li>
        <li><strong>Payment records.</strong> The amount, the pass bought, the date, and Razorpay&apos;s payment reference — our record of the sale, kept for accounting and tax.</li>
        <li><strong>Correspondence.</strong> If you email us, we keep that exchange so we can follow it up.</li>
      </ul>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>What we do not collect</h2>
      <p>
        Card numbers, CVV, UPI PIN, bank login details, or any other payment credential. These are
        entered on Razorpay&apos;s own secure checkout and are never transmitted to or stored by us.
      </p>
      <p>
        We do not run advertising networks, behavioural tracking, or analytics that profile you
        across other services.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Why we hold it</h2>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li>To grant, extend and end your access to the private group.</li>
        <li>To send your invite link and remind you before a pass expires.</li>
        <li>To answer questions and resolve billing errors.</li>
        <li>To keep records required by Indian tax and accounting law.</li>
      </ul>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Where it is stored</h2>
      <p>
        Subscriber and payment records are held in a private Google Sheet reachable only over an
        authenticated connection. Access to our administrative tools requires a verified sign-in and
        is restricted to named curators.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Who we share it with</h2>
      <p>We share data only with the services needed to run this, and only what each one needs:</p>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li><strong>Razorpay</strong> — to take payments and process any billing correction. Governed by Razorpay&apos;s own privacy policy.</li>
        <li><strong>Telegram</strong> — to message you and manage group membership. Governed by Telegram&apos;s privacy policy.</li>
        <li><strong>Google</strong> — for the private spreadsheet holding our records.</li>
      </ul>
      <p>
        We do not sell, rent or trade your data. We disclose it otherwise only where the law requires
        it.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>How long we keep it</h2>
      <p>
        Membership records are kept while your pass is active and for a reasonable period afterwards,
        so you can rejoin or query a payment. Payment records are kept for as long as tax law
        requires. You can ask us to delete anything we are not legally required to keep.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Your rights</h2>
      <p>You may ask us to:</p>
      <ul style={{ paddingLeft: 24, marginBottom: 16 }}>
        <li>Tell you what data we hold about you.</li>
        <li>Correct anything that is wrong.</li>
        <li>Delete your data, where we are not legally required to keep it.</li>
        <li>Stop messaging you — though this ends the service you paid for, and no refund arises.</li>
      </ul>
      <p>Email <strong>{CONTACT.email}</strong> and we will respond within 7 working days.</p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Children</h2>
      <p>
        The Service is intended for candidates preparing for a competitive examination and is not
        directed at children. We do not knowingly collect data from children. If you believe a child
        has given us personal information, contact us at <strong>{CONTACT.email}</strong> and we will
        delete it.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Cookies</h2>
      <p>
        This website sets no advertising or tracking cookies. Our administrative dashboards, which
        are not open to the public, use a sign-in session purely to keep a curator signed in.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Security</h2>
      <p>
        We protect your data with measures appropriate to its sensitivity, including authenticated
        access to our records and restricted administrative accounts. No system is perfectly secure,
        but because we never hold payment credentials, the most sensitive category of data is not
        ours to lose.
      </p>

      <h2 style={{ marginTop: 32, marginBottom: 16 }}>Changes to this policy</h2>
      <p>
        We may update this policy. The effective date above shows when it last changed, and
        meaningful changes will be announced in the group.
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

export default Privacy;
