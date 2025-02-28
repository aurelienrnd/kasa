// import modules
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//import context
import GetDataContext from './Get-data-context.jsx';

/**Crée un provider pour partager les données récupérées via fetch.
 * @returns {JSX.Element} Le contexte "GetDataContext".
 *
 * @loading Contexte - État de la requête API : true (en cours) ou false.
 * @data Contexte - Tableau récupéré via la requête API.
 * @erreur Contexte - Message string retourné par la requête API en cas d'erreur.
 */
function GetDataProvider({ children }) {
  const [data, setData] = useState([]); // Stocker les données récupérées
  const [loading, setLoading] = useState(true); // Gérer l'état de chargement
  const [error, setError] = useState(''); // Gérer les erreurs

  useEffect(() => {
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch('/data/accommodation-data.json');

        /*
         Pour tester le lorder et simuler un chargement plus lent
        await new Promise((resolve) => setTimeout(resolve, 500)); // Ajoute un délai de 0.5s
        */

        if (response.ok) {
          /* Si le fichier n'est pas trouvé dans le dossier "public", Vite renvoie index.html avec un code 200.
            - Solution : vérifier si la réponse contient un fichier .json.
            Si ce n'est pas le cas, cela signifie que Vite renvoie index.html. */
          const contentType = response.headers.get('content-type');
          if (!contentType.includes('application/json')) {
            throw new Error("Le serveur a retourné un fichier qui n'est pas du JSON !");
          }

          const result = await response.json();

          setData(result); // Mise à jour des données
        } else {
          throw new Error('Erreur lors du chargement des données');
        }
      } catch (err) {
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  return (
    <GetDataContext.Provider value={{ loading, data, error }}>{children}</GetDataContext.Provider>
  );
}

// Gestion des props
GetDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GetDataProvider;
