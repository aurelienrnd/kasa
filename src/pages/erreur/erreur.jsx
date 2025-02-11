import { Link } from 'react-router-dom';

function Erreur() {
  return (
    <main>
      <section className="erreur-page">
        <span className="message-404">404</span>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <Link to="/" className="link-erreur">
          Retourner sur la page d’accueil
        </Link>
      </section>
    </main>
  );
}

export default Erreur;
