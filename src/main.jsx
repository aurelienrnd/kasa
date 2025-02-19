// Import modules React
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Components
import Header from './components/header/Header.jsx';
import Footer from './components/footer/Footer.jsx';

// Import Context
import GetDataProvider from './useful/contexte/Get-data-provider.jsx';

// Import Pages
import Home from './pages/home/home';
import Accommodation from './pages/accommodation/Accommodation';
import About from './pages/about/About';
import Error from './pages/error/Error';

// Import Style
import './style/style.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <GetDataProvider>
              <Home />
            </GetDataProvider>
          }
        />
        <Route
          path="/accommodation/:id"
          element={
            <GetDataProvider>
              <Accommodation />
            </GetDataProvider>
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
);
