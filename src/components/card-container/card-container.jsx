import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function CardContainer() {
  const [data, setData] = useState([]); // Stocker les données récupérées
  const [loading, setLoading] = useState(true); // Gérer l'état de chargement
  const [error, setError] = useState(null); // Gérer les erreurs

  const fetchData = async () => {
    try {
      const response = await fetch('/data/logements.json'); // Appel API
      if (!response.ok) {
        throw new Error('Erreur lors du chargement des données');
      }
      const result = await response.json(); // Conversion des données en JSON
      setData(result); // Mise à jour des données
    } catch (err) {
      setError(err.message); // Gestion des erreurs
    } finally {
      setLoading(false); // Fin du chargement
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const loadingMessage = <p>chargement</p>;
  const erreurMessage = <p>erreur</p>;
  console.log(data);
  return (
    <div className="card-container">
      <span>{(loading && loadingMessage) || (error && erreurMessage)}</span>
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
