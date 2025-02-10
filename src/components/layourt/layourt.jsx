import { Outlet } from 'react-router-dom';
// Import Components

// Import Pages
import Header from '../header/header.jsx';
import Footer from '../footer/footer.jsx';

function Layout() {
  return (
    <>
      <div className="layout">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
