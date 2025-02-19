// import component
import Banner from '../../components/banner/Banner';
import CardContainer from '../../components/card-container/Card-container';

//import  image
import imageBanner from '../../assets/images/banner-home.webp';

/** Affiche le contenu de la page d'aceuille.
 * @returns {JSX.Element} Le composant de la page "Home".
 *
 * @Banner Component - Creation de la baniere
 * @CardContainer Component -  Creations des card hebergement
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
