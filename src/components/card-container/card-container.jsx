import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

/** Affiche les cartes hebergements sur la page d'aceuille.
 * @function {fetchData} une requette api pour recupere les difèrent logement.
 * @returns {JSX.Element} une div avec toute les carte hebergements.
 */
function CardContainer() {
  const [data, setData] = useState([]); // Stocker les données récupérées
  const [loading, setLoading] = useState(true); // Gérer l'état de chargement
  const [error, setError] = useState(''); // Gérer les erreurs

  // fonction get
  const fetchData = async () => {
    try {
      const response = await fetch('/data/logements.json');

      // Pour tester le lorder et simuler un chargement plus lent
      await new Promise((resolve) => setTimeout(resolve, 1000)); // Ajoute un délai de 3s

      if (response.ok) {
        /*ci il ne trouve pas le fichier dans public vite retourne index.htm avec une reponsse 200
        - solution: tester ci responce contien un fichier .json, ci non, c'est que vite retourne index.html*/
        const contentType = response.headers.get('content-type');
        if (!contentType.includes('application/json')) {
          throw new Error("Le serveur a retourné un fichier qui n'est pas du JSON !");
        }
        const result = await response.json();
        console.log(result);
        setData(result); // Mise à jour des données
      } else {
        throw new Error('Erreur lors du chargement des données');
      }
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
  const erreurMessage = <p className="error-massage">{error}</p>;
  console.log(data);

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
