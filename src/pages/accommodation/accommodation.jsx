import { useContext } from 'react';
import GetDataContext from '../../utile/contexte/get-data-context';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../components/carousel/carousel';
import Description from '../../components/description/description';

function Accommodation() {
  const { loading, data, error } = useContext(GetDataContext);

  const loaderCircle = <div className="loader-circle"></div>;
  const erreurMessage = <p className="error-message">{error}</p>;
  const { id } = useParams();

  if (loading) return <main className="loader-main">{loaderCircle};</main>;
  if (error) return <main className="error-massage-main">{erreurMessage};</main>;
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
