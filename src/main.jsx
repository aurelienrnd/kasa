import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './compoments/header/header';
import Footer from './compoments/footer/footer';
import Home from './pages/home/home';
import Logement from './pages/logement/logement';
import Apropos from './pages/a_propos/a_propos';
import Erreur from './pages/erreur/erreur';

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
