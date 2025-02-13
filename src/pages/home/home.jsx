import Banner from '../../components/banner/banner';
import imageBanner from '../../assets/images/banner-home.png';
import CardContainer from '../../components/card-container/card-container';

/** Affiche le contenu de la page d'aceuille.
 * @returns {JSX.Element} Le composant de la page "Home".
 * @Banner {component} creation de la baniere
 * @DropdownButton {CardContainer} creations des card hebergement
 */
function Home() {
  const titleValue = 'Chez vous, partout et ailleurs';
  return (
    <main>
      <section className="home-page">
        <Banner title={titleValue} img={imageBanner}></Banner>
        <CardContainer />
      </section>
    </main>
  );
}

export default Home;
