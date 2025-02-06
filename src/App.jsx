import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const PageTitleUpdater = () => {
  const location = useLocation();

  useEffect(() => {
    const routeTitles = {
      '/': 'Home - My Website',
      '/about': 'About - My Website',
      '/skills': 'Skills - My Website',
      '/projects': 'Projects - My Website',
      '/contact': 'Contact - My Website',
    };

    document.title = routeTitles[location.pathname] || 'My Website';
  }, [location]);

  return null;
};

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />
      <PageTitleUpdater />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
