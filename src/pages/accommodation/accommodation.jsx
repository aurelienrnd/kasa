// import modules
import { useContext } from 'react';
import { useParams, Navigate } from 'react-router-dom';

// import compoments
import Carousel from '../../components/carousel/carousel';
import Description from '../../components/description/description';

// import Context
import GetDataContext from '../../utile/contexte/get-data-context';

/** Affiche une nouvelle page avec les detaille de chaque ebergement".
 * @returns {JSX.Element} Le composant de la page "accomodation".
 *
 * @loading Contexte - État de la requête API : true (en cours) ou false.
 * @data Contexte - Tableau récupéré via la requête API.
 * @erreur Contexte - Message string retourné par la requête API en cas d'erreur.
 *
 * @Carousel Component - Un carousel d'image
 * @Description Component - Une description de chaque hebergement
 */
function Accommodation() {
  const { loading, data, error } = useContext(GetDataContext);
  // recuperation du paramaitre de l'url
  const { id } = useParams();

  // Gestion de l'affichage pendant le chargement ou en cas d'erreur
  const loaderCircle = <div className="loader-circle"></div>;
  if (loading) return <main className="loader-main">{loaderCircle};</main>;
  const erreurMessage = <p className="error-message">{error}</p>;
  if (error) return <main className="error-massage-main">{erreurMessage};</main>;

  // Compare le paramètre de l'URL avec le tableau data, si aucun élément ne correspond, redirection vers une page d'erreur.
  let logement = data.filter((element) => element.id === id)[0]; // [0] car filter me retourne un tableaux de un element
  if (!logement) return <Navigate to="*" />;

  return (
    <main>
      <section className="accommodation">
        <Carousel tblImg={logement.pictures} descriptionAlt={logement.title} />
        <Description logement={logement}></Description>
      </section>
    </main>
  );
}

export default Accommodation;
