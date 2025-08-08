import React from 'https://esm.sh/react@18';
import {
  HashRouter,
  Routes,
  Route,
  Link
} from 'https://esm.sh/react-router-dom@6';

import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  return (
    <HashRouter>
      <nav>
        <Link to="/">Home</Link>
        {' | '}
        <Link to="/services">Services</Link>
        {' | '}
        <Link to="/about">About</Link>
        {' | '}
        <Link to="/contact">Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </HashRouter>
  );
}
