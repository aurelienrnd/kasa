import { Link } from 'react-router-dom';

function Erreur() {
  return (
    <section className="erreur-page">
      <span className="message-404">404</span>
      <h1>Oups! La page que vous demandez n'existe pas.</h1>
      <Link to="/" className="link-erreur">
        Retourner sur la page d’accueil
      </Link>
    </section>
  );
}

export default Erreur;
