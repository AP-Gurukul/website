// ============================================================================
// Site configuration (src/config.ts)
// ============================================================================
// What we sell, what it costs, and how to reach us — in one place.
//
// The prices here MUST match src/plans.js in the telegram-automation repo,
// which is what the bot charges and what the Razorpay webhook records. A site
// advertising one amount while the bot charges another is the single error
// here that reaches a paying student, so if a price changes, change it in both
// places in the same sitting.
// ============================================================================

/** Telegram bot students message to buy a pass. */
export const BOT_HANDLE = '@sadhanamainbot';
export const BOT_URL = `https://t.me/${BOT_HANDLE.replace(/^@/, '')}`;

/** Business contact details, shown on the policy pages and in the footer. */
export const CONTACT = {
  name: 'Sadhana APPSC',
  email: 'appscsadhana@gmail.com',
  phone: '+91 95335 88804',
  // Razorpay expects a real operating address, not a placeholder.
  address: 'REPLACE ME — street, city, state, PIN'
};

export interface Plan {
  id: string;
  name: string;
  tag: string;
  price: string;
  period: string;
  note: string;
  featured: boolean;
  features: string[];
}

/** The three passes, in the order the bot shows them. */
export const PLANS: Plan[] = [
  {
    id: 'sprint_30',
    name: '30-Day Sprint',
    tag: 'Starter',
    price: '₹299',
    period: 'one-time',
    note: '30 days of access',
    featured: false,
    features: [
      'Daily practice questions in the private group',
      'Answers with detailed explanations',
      'Every Group 1 & 2 subject covered',
      'Reminder 3 days before your pass ends'
    ]
  },
  {
    id: 'autopay_monthly',
    name: 'Monthly Auto-Pay',
    tag: 'Most popular',
    price: '₹249',
    period: '/month',
    note: 'Auto-renews — cancel anytime',
    featured: true,
    features: [
      'Everything in the 30-Day Sprint',
      'Renews itself over UPI AutoPay or card',
      'Save 17% against the one-time pass',
      'Cancel any time with /cancel — keep the days you paid for'
    ]
  },
  {
    id: 'exam_pass',
    name: 'Target APPSC 2026',
    tag: 'Best value',
    price: '₹799',
    period: 'one-time',
    note: 'Access until exam day',
    featured: false,
    features: [
      'Everything in the Monthly pass',
      'One payment, no renewals to remember',
      'Access right through to the 2026 exam',
      'Reminder a week before it ends'
    ]
  }
];
