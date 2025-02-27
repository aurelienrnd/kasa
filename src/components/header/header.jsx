// import modul
import { Link, useLocation } from 'react-router-dom';

//import image
import Kasa_logo_red from '../../assets/logo/logo-kasa-red.png';

/** Crée le header du site.
 * @returns {JSX.Element} Le header avec un logo et les liens de navigation.
 *
 * @Link - "/" -  lien vers la page d'aceuille
 * @Link - "/about" -  lien vers la page A Propos
 */
function Header() {
  const location = useLocation();

  return (
    <header>
      <img src={Kasa_logo_red} alt="Logo kasa" className="logo-header" />

      <nav>
        <ul className="list-nav-header">
          <li>
            <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>
              Accueil
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}
            >
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
