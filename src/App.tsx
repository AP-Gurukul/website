import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Subjects from './components/Subjects';
import HowItWorks from './components/HowItWorks';
import LivePreview from './components/LivePreview';
import AppShowcase from './components/AppShowcase';
import Outcomes from './components/Outcomes';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import './index.css'; // Ensure global styles are imported

function App() {
  const [path, setPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => setPath(window.location.pathname);
    window.addEventListener('popstate', handleLocationChange);
    return () => window.removeEventListener('popstate', handleLocationChange);
  }, []);

  if (path === '/terms' || path === '/terms.html') {
    return (
      <>
        <Navbar />
        <Terms />
        <Footer />
      </>
    );
  }

  if (path === '/privacy' || path === '/privacy.html') {
    return (
      <>
        <Navbar />
        <Privacy />
        <Footer />
      </>
    );
  }

  if (path === '/refund' || path === '/refund.html') {
    return (
      <>
        <Navbar />
        <Refund />
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Subjects />
      <HowItWorks />
      <LivePreview />
      <AppShowcase />
      <Outcomes />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
