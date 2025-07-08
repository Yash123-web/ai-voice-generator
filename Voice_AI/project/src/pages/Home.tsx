import React from 'react';
import Hero from '../components/Hero';
import InteractiveDemo from '../components/InteractiveDemo';
import Features from '../components/Features';
import UseCases from '../components/UseCases';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <InteractiveDemo />
      <Features />
      <UseCases />
      <Testimonials />
      <CTA />
    </div>
  );
};

export default Home;