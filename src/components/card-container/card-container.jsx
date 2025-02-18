// Import modules
import { Link } from 'react-router-dom';
import { useContext } from 'react';

// Import contexte
import GetDataContext from '../../utile/contexte/get-data-context';

/** Affiche les cartes d'hébergement sur la page d'accueil.
 * @returns {JSX.Element} Une div contenant toutes les cartes d'hébergement,
 * le message d'erreur ou l'animation de chargement.
 *
 * @loading Contexte - État de la requête API : true (en cours) ou false.
 * @data Contexte - Tableau récupéré via la requête API.
 * @erreur Contexte - Message string retourné par la requête API en cas d'erreur.
 *
 * @Link - "/accommodation/:id" -  lien vers la page acomodation
 */
function CardContainer() {
  // Récupération des données depuis le contexte
  const { loading, data, error } = useContext(GetDataContext);

  // Gestion de l'affichage pendant le chargement ou en cas d'erreur
  const loaderCircle = <div className="loader-circle"></div>;
  if (loading) return <div className="card-container">{loaderCircle}</div>;
  const erreurMessage = <p className="error-message">{error}</p>;
  if (error) return <div className="card-container">{erreurMessage}</div>;

  return (
    <div className="card-container">
      <ul className="logement-list">
        {data.map((logement) => (
          <li key={logement.id} className="card">
            <Link to={`/accommodation/${logement.id}`}>
              <article>
                <div>
                  <img src={logement.cover} alt={logement.title} />
                </div>
                <span className="logement-title tag">{logement.title}</span>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardContainer;
