/* ============================================================
   APPSC Sadhana — Website JavaScript
   Handles: FAQ accordion, smooth scroll, mobile nav toggle
   All interactions are minimal and performant
   ============================================================ */

/* ── Wait for DOM to be fully loaded before attaching listeners ── */
/* This ensures all HTML elements exist before we try to reference them */
document.addEventListener('DOMContentLoaded', () => {

  /* ── FAQ Accordion ──────────────────────────────────────────── */
  /* Behavior: Only one FAQ item can be open at a time.            */
  /* Clicking an open item closes it. Clicking a closed item       */
  /* closes any currently open item and opens the clicked one.     */
  /* Toggle symbol switches between + (closed) and − (open).      */
  /* Visible in: Section 11 — FAQ section                          */

  /* Select all FAQ question buttons — these are the clickable rows */
  const faqQuestions = document.querySelectorAll('.faq-question');

  /* Attach click listener to each FAQ question button */
  faqQuestions.forEach((question) => {
    question.addEventListener('click', () => {

      /* Get the parent FAQ item (.faq-item) of the clicked question */
      const parentItem = question.closest('.faq-item');

      /* Check if the clicked item is already open/active */
      const isActive = parentItem.classList.contains('active');

      /* Close ALL open FAQ items first (one-at-a-time behavior) */
      /* This iterates every FAQ item and removes the 'active' class */
      document.querySelectorAll('.faq-item.active').forEach((openItem) => {
        openItem.classList.remove('active');  /* Collapse the answer via CSS max-height */

        /* Reset the toggle symbol back to + (closed state) */
        const toggle = openItem.querySelector('.faq-toggle');
        if (toggle) toggle.textContent = '+';
      });

      /* If the clicked item was NOT already open, open it now */
      /* If it WAS already open, it stays closed (toggle behavior) */
      if (!isActive) {
        parentItem.classList.add('active');  /* Expand the answer via CSS max-height */

        /* Switch the toggle symbol to − (open state) */
        const toggle = parentItem.querySelector('.faq-toggle');
        if (toggle) toggle.textContent = '−';
      }
    });
  });

  /* ── Mobile Navigation Toggle ───────────────────────────────── */
  /* Behavior: Hamburger button toggles visibility of nav links    */
  /* Only active on mobile screens (≤700px) where links are hidden */
  /* Visible in: Section 1 — Navigation Bar (mobile only)          */

  /* Get the hamburger button and nav links container */
  const hamburger = document.getElementById('navHamburger');
  const navLinks = document.getElementById('navLinks');

  /* Toggle nav links visibility when hamburger is clicked */
  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      /* Add/remove 'active' class to show/hide the mobile menu */
      navLinks.classList.toggle('active');
    });
  }

  /* ── Close mobile nav when a link is clicked ──────────────── */
  /* After clicking a nav link, close the mobile menu so the    */
  /* user can see the section they navigated to without the     */
  /* menu blocking the view.                                    */
  /* Visible in: Section 1 — Navigation Bar (mobile only)       */

  /* Select all links inside the nav-links container */
  const navLinkItems = document.querySelectorAll('.nav-links a');

  navLinkItems.forEach((link) => {
    link.addEventListener('click', () => {
      /* Remove 'active' class to close mobile menu after click */
      if (navLinks) navLinks.classList.remove('active');
    });
  });

  /* ── Smooth Scroll for Anchor Links ─────────────────────────── */
  /* Behavior: All internal anchor links (#section-id) scroll     */
  /* smoothly to their target with an offset for the fixed nav.   */
  /* The CSS scroll-behavior: smooth handles most of this, but    */
  /* we need JS for the nav offset compensation.                  */
  /* Visible in: All navigation links and CTA buttons              */

  /* Select all links that start with # (internal anchors) */
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {

      /* Get the href value (e.g., "#features") */
      const href = anchor.getAttribute('href');

      /* Skip if href is just "#" (no specific target) */
      if (href === '#') return;

      /* Prevent default jump behavior — we'll scroll manually */
      e.preventDefault();

      /* Find the target element by its ID */
      const target = document.querySelector(href);

      if (target) {
        /* Calculate scroll position with 70px offset for fixed nav */
        /* The navbar is 62px tall + 8px extra breathing room = 70px */
        const offsetTop = target.offsetTop - 70;

        /* Smooth scroll to the calculated position */
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

});
