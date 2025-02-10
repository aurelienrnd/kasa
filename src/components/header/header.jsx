import { Link } from 'react-router-dom';
import Kasa_logo_red from '../../assets/logo/logo_casa_red.png';

function Header() {
  return (
    <header>
      <img src={Kasa_logo_red} alt="Logo kasa" className="logo-header" />

      <nav>
        <ul className="list-nav-header">
          <li>
            <Link to="/" className="nav-link">
              Accueil
            </Link>
          </li>

          <li>
            <Link to="/a_propos" className="nav-link">
              A Propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
