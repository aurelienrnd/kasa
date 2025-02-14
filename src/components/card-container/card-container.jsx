import { Link } from 'react-router-dom';
import { useContext } from 'react';
import GetDataContext from '../../utile/contexte/get-data-context';

/** Affiche les cartes hebergements sur la page d'aceuille.
 * @function {fetchData} une requette api pour recupere les difèrent logement.
 * @returns {JSX.Element} une div avec toute les carte hebergements.
 */
function CardContainer() {
  // recuperation des données depuis le contexte
  const { loading, data, error } = useContext(GetDataContext);

  // affichage d'un message de chargement et d'erreur
  const loaderCircle = <div className="loader-circle"></div>;
  const erreurMessage = <p className="error-message">{error}</p>;

  return (
    <div className="card-container">
      <div className="loader-erreur-container">
        {(loading && loaderCircle) || (error && erreurMessage)}
      </div>

      <ul className="logement-list">
        {data.map((logement) => (
          <li key={logement.id} className="card">
            <Link to={`/accommodation/${logement.id}`}>
              <article>
                <div>
                  <img src={logement.cover} alt={logement.title} />
                </div>
                <h2 className="logement-title">{logement.location}</h2>
              </article>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CardContainer;
