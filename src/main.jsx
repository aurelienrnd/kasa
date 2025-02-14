// Import React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Import Components
import Header from './components/header/header.jsx';
import Footer from './components/footer/footer.jsx';

// Import Context
import GetDataProvider from './utile/contexte/get-data-provider.jsx';

// Import Pages
import Home from './pages/home/home';
import Accommodation from './pages/accommodation/accommodation';
import Apropos from './pages/about/about';
import Error from './pages/error/error';
// Import Style
import './style/style.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GetDataProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/accommodation/:id" element={<Accommodation />} />
          <Route path="/about" element={<Apropos />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </GetDataProvider>
  </StrictMode>
);
