// Import React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// Import Components
import Header from './components/header/header';
import Footer from './components/footer/footer';
// Import Pages
import Home from './pages/home/home';
import Logement from './pages/logement/logement';
import Apropos from './pages/a_propos/a_propos';
import Erreur from './pages/erreur/erreur';
// Import Style
import './style/style.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/logement" element={<Logement />} />
        <Route path="/a_propos" element={<Apropos />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
