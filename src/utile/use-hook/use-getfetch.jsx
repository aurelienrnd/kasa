import { useState, useEffect } from 'react';

function UseGetFetch(url) {
  const [data, setData] = useState([]); // Stocker les données récupérées
  const [loading, setLoading] = useState(true); // Gérer l'état de chargement
  const [error, setError] = useState(''); // Gérer les erreurs

  useEffect(() => {
    if (!url) return;
    setLoading(true);
    async function fetchData() {
      try {
        const response = await fetch(url);

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
        console.log(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url]);

  return { loading, data, error };
}

export default UseGetFetch;
