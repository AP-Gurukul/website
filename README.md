# Sadhana APPSC - Web Application

![Sadhana APPSC](https://sadhanappsc.com/og-image.png)

Welcome to the official repository for the **Sadhana APPSC** web application. This is a modern, ultra-fast, React-based Single Page Application (SPA) designed to help aspirants crack the APPSC Group 1 and 2 examinations through focused practice, curated questions, and smart mock tests.

## 🚀 Live Demo

The application is deployed and accessible at: **[https://sadhanaappsc.in](https://sadhanaappsc.in)**

## 🛠️ Tech Stack

This project is built using modern web development standards for maximum performance and developer experience:

- **Framework:** React 18
- **Build Tool:** Vite
- **Language:** TypeScript
- **Styling:** Vanilla CSS (CSS Modules for component scoping)
- **Icons:** Lucide React
- **Deployment:** Vercel (Continuous Deployment)

## 📦 Getting Started

To get a local copy of the project up and running, follow these simple steps.

### Prerequisites

You need Node.js installed on your machine. We recommend using LTS version 18 or higher.

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AP-Gurukul/website.git
   ```

2. **Navigate to the project directory**
   ```bash
   cd website
   ```

3. **Install dependencies**
   ```bash
   npm install
   ```

4. **Start the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to view the application in development mode.

## 🏗️ Project Structure

```
website/
├── public/               # Static assets (images, fonts, _redirects for Netlify)
├── src/
│   ├── assets/           # React-imported assets
│   ├── components/       # Reusable UI components (Hero, Navbar, Features, etc.)
│   ├── pages/            # Page-level components (Terms, Privacy, Refund)
│   ├── App.tsx           # Main application routing and layout
│   ├── index.css         # Global styles and variables
│   └── main.tsx          # Application entry point
├── .oxlintrc.json        # Linter configuration
├── index.html            # HTML template and security meta tags
├── package.json          # Dependencies and scripts
├── vercel.json           # Vercel deployment configuration
└── vite.config.ts        # Vite configuration
```

## 🚀 Deployment

This project uses **Continuous Deployment (CD)** via Vercel. 
Any changes pushed to the `main` branch will automatically trigger a build and deployment to the production environment.

**Deployment Fallbacks:**
The project includes both `vercel.json` and `public/_redirects` to ensure that SPA routing works correctly regardless of whether the project is hosted on Vercel or Netlify.

## 📝 License

Copyright © 2026 sadhanaappsc.in - All Rights Reserved.
This project is proprietary and confidential. Unauthorized copying, modification, or distribution is strictly prohibited.
