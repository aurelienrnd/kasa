import { useContext } from 'react';
import GetDataContext from '../../utile/contexte/get-data-context';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../components/carousel/carousel';

function Accommodation() {
  const { loading, data, error } = useContext(GetDataContext);

  const loaderCircle = <div className="loader-circle"></div>;
  const erreurMessage = <p className="error-message">{error}</p>;
  const { id } = useParams();

  if (loading) return <main>{loaderCircle};</main>;
  if (error) return <main>{erreurMessage};</main>;
  let logement = data.filter((element) => element.id === id)[0]; // [0] car filter me retourne un tableaux de un element
  console.log(id);
  if (!logement) return <Navigate to="*" />;

  return (
    <main>
      <section className="accommodation">
        <Carousel tblImg={logement.pictures} descriptionAlt={logement.title} />
      </section>
    </main>
  );
}

export default Accommodation;
