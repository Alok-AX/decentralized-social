import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CTASection from '../components/home/CTASection';
import FeaturesSection from '../components/home/FeaturesSection';
import HeroSection from '../components/home/HeroSection';
import HowItWorksSection from '../components/home/HowItWorksSection';

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // Scroll to top when no hash
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors pt-24">
      <Navbar />      
      <HeroSection/>
      <FeaturesSection/>
      <HowItWorksSection/> 
      <CTASection/>
      <Footer/>
    </div>
  )
}