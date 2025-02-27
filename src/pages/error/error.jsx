// import module
import { Link } from 'react-router-dom';

/** Affiche le contenu de la page "Erreur".
 * @returns {JSX.Element} Le composant de la page "Erreur".
 * @Link - "/" -  lien vers la page d'aceuille
 */
function Error() {
  return (
    <main className="main-error">
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

export default Error;
