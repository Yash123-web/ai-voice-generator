import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/voice-conversion" element={<div className="pt-20 p-8 text-center">Voice Conversion Page</div>} />
              <Route path="/gallery" element={<div className="pt-20 p-8 text-center">Gallery Page</div>} />
              <Route path="/text-to-speech" element={<div className="pt-20 p-8 text-center">Text to Speech Page</div>} />
              <Route path="/voice-samples" element={<div className="pt-20 p-8 text-center">Voice Samples Page</div>} />
              <Route path="/pricing" element={<div className="pt-20 p-8 text-center">Pricing Page</div>} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;