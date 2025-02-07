import { Link } from 'react-router-dom';

function Header() {
  return (
    <>
      <Link to="/">acceuil</Link>
      <Link to="/a_propos">a propos</Link>
      <p>header</p>
    </>
  );
}

export default Header;
