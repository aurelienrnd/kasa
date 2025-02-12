import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/** Affiche les cartes hebergements sur la page d'aceuille.
 * @function {fetchData} une requette api pour recupere les difèrent logement.
 * @returns {JSX.Element} une div avec toute les carte hebergements.
 */
function CardContainer() {
  const [data, setData] = useState([]); // Stocker les données récupérées
  const [loading, setLoading] = useState(true); // Gérer l'état de chargement
  const [error, setError] = useState(null); // Gérer les erreurs

  // fonction get
  const fetchData = async () => {
    try {
      const response = await fetch('/data/logements.json');
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      const result = await response.json();
      setData(result); // Mise à jour des données
    } catch (err) {
      console.log(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // affichage d'un message de chargement et d'erreur
  const loaderCircle = <div className="loader-circle"></div>;
  const erreurMessage = <p>{'Erreur lors du chargement des données'}</p>;
  console.log(data);

  return (
    <div className="card-container">
      <div className="loader-erreur-container">
        {(loading && loaderCircle) || (error && erreurMessage)}
      </div>

      <ul className="logement-list">
        {data.map((logement) => (
          <li key={logement.id} className="card">
            <Link to={`/logement/${logement.id}`}>
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
