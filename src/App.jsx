import './index.css'
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ForArtisans from './pages/ForArtisans'
import ForClients from './pages/ForClients'
import HowItWorks from './pages/HowItWorks'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import WaitlistPage from './pages/WaitlistPage'
import Vision from './pages/Vision';

const App = () => {
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDark));
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark(!isDark);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar isDark={isDark} toggleDarkMode={toggleDarkMode} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/for-artisans" element={<ForArtisans />} />
            <Route path="/for-clients" element={<ForClients />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/waitlist" element={<WaitlistPage />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/vision" element={<Vision />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App
