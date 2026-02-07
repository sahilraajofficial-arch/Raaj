import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CategoryTabs from './components/CategoryTabs';
import WhyChooseUs from './components/WhyChooseUs';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FloatingWidget from './components/FloatingWidget';

const App: React.FC = () => {
  return (
    <div className="font-sans text-stone-900 bg-stone-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <CategoryTabs />
        <WhyChooseUs />
        <Process />
        <Testimonials />
      </main>
      <Footer />
      <FloatingWidget />
    </div>
  );
};

export default App;
