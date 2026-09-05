# Sadhana APPSC - Detailed System Design Document

This document outlines the detailed system design, architecture, and technical implementation of the Sadhana APPSC web application.

## 1. High-Level Architecture

The Sadhana APPSC application is a modern Single Page Application (SPA) designed to provide a fast, responsive, and seamless user experience for aspirants preparing for APPSC Group 1 and 2 examinations.

### 1.1 Core Technologies
- **Framework**: React 18 - Utilized for building the user interface using a component-based architecture.
- **Build Tool**: Vite - Chosen for its extremely fast Hot Module Replacement (HMR) and optimized production builds.
- **Language**: TypeScript - Provides static typing to enhance code quality, maintainability, and developer experience.
- **Styling**: Vanilla CSS with CSS Modules - Ensures component-level style scoping and avoids global CSS conflicts without the overhead of heavy CSS-in-JS libraries.
- **Icons**: Lucide React - A lightweight and customizable icon library.
- **Linting**: Oxlint - A fast JavaScript/TypeScript linter written in Rust.

## 2. Directory Structure

The project follows a standard Vite + React project structure, optimized for component reusability and separation of concerns.

```text
website/
├── public/                 # Static assets that don't go through the bundler
│   ├── _redirects          # Netlify/Vercel fallback routing configurations
│   └── ...                 # Other static assets (images, fonts, favicons)
├── src/                    # Application source code
│   ├── assets/             # Assets imported directly into React components (e.g., SVGs, logos)
│   ├── components/         # Reusable, self-contained UI components (CSS Modules co-located)
│   ├── pages/              # Top-level page components (Terms, Privacy, Refund)
│   ├── App.tsx             # Main application component and routing logic
│   ├── index.css           # Global CSS variables, resets, and typography
│   └── main.tsx            # Application entry point, attaches React to the DOM
├── .oxlintrc.json          # Oxlint configuration
├── index.html              # Main HTML template
├── package.json            # Project metadata, scripts, and dependencies
├── vercel.json             # Vercel deployment configuration
└── vite.config.ts          # Vite configuration
```

## 3. Component Architecture

The application UI is broken down into highly modular components, primarily focused on building a comprehensive landing page and supplementary legal pages.

### 3.1 Landing Page Components
The main landing page is a composition of several stacked sections, each handling its own logic and styling:
- `Navbar.tsx`: Application header with navigation links and calls-to-action.
- `Hero.tsx`: The top-most section introducing the product with primary value propositions and a strong CTA.
- `Marquee.tsx`: A scrolling banner, often used for announcements, partner logos, or key highlights.
- `Features.tsx`: Grid layout showcasing the core features of the platform.
- `Subjects.tsx`: Details the subjects or syllabus covered by the platform.
- `HowItWorks.tsx`: Step-by-step guide explaining the user journey or platform usage.
- `LivePreview.tsx`: An interactive or visual preview of the platform's interface.
- `AppShowcase.tsx`: Highlights the mobile application or specific app features.
- `Outcomes.tsx`: Displays success metrics, testimonials, or expected results.
- `Pricing.tsx`: Subscription tiers or course pricing details.
- `FAQ.tsx`: Frequently Asked Questions presented in an accordion or list format.
- `CTA.tsx`: A final Call-to-Action section before the footer.
- `Footer.tsx`: Application footer containing links, copyright info, and secondary navigation.

### 3.2 Page Components
Standalone pages that don't follow the main landing page structure:
- `Terms.tsx`: Terms and Conditions page.
- `Privacy.tsx`: Privacy Policy page.
- `Refund.tsx`: Refund and Cancellation Policy page.

## 4. State Management and Routing

### 4.1 Routing Strategy
Instead of relying on an external library like `react-router-dom`, the application implements a lightweight, custom routing solution within `App.tsx`. 

**Implementation Details:**
- Uses React's `useState` to track the current `window.location.pathname`.
- Uses `useEffect` to listen to the browser's `popstate` event, enabling native back/forward button support.
- Conditionally renders either the specific page components (`/terms`, `/privacy`, `/refund`) or the composite landing page based on the current path.

```typescript
// Routing logic in App.tsx
const [path, setPath] = useState(window.location.pathname);

useEffect(() => {
  const handleLocationChange = () => setPath(window.location.pathname);
  window.addEventListener('popstate', handleLocationChange);
  return () => window.removeEventListener('popstate', handleLocationChange);
}, []);
```

## 5. Styling Strategy

The application adopts a robust CSS architecture balancing global consistency with local isolation.

### 5.1 Global Styles (`index.css`)
- Defines global CSS variables (custom properties) for colors, typography, spacing, and theme settings.
- Applies a CSS reset to ensure cross-browser consistency.
- Sets global typographic defaults.

### 5.2 Component-Level Styles (CSS Modules)
- Every component in the `src/components` directory has a co-located `.module.css` file (e.g., `Hero.tsx` and `Hero.module.css`).
- Vite compiles these modules, generating unique class names to prevent CSS rule collisions across the application.
- This approach guarantees that styles written for `Hero` will never accidentally leak into `Navbar`.

## 6. Build and Deployment

### 6.1 Build Pipeline
- Managed by Vite. Running `npm run build` executes `tsc -b` (TypeScript compiler for type checking) followed by `vite build`.
- Vite bundles the application, optimizes assets, and outputs static HTML, CSS, and JS files into the `dist/` directory.

### 6.2 Deployment Configuration
- The application is configured for Continuous Deployment (CD) on **Vercel**.
- `vercel.json` provides specific configuration for the Vercel edge network, particularly handling SPA routing by rewriting all traffic to `index.html`.
- A `public/_redirects` file is also maintained as a fallback for Netlify deployments, ensuring maximum hosting flexibility.
