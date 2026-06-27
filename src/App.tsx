import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import Features from './components/Features';
import Subjects from './components/Subjects';
import HowItWorks from './components/HowItWorks';
import LivePreview from './components/LivePreview';
import Outcomes from './components/Outcomes';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import Footer from './components/Footer';
import './index.css'; // Ensure global styles are imported

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Marquee />
      <Features />
      <Subjects />
      <HowItWorks />
      <LivePreview />
      <Outcomes />
      <Pricing />
      <FAQ />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
