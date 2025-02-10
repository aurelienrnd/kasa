import Banner from '../../components/banner/banner';
import imageBanner from '../../assets/image/banner-home.png';
import CardContainer from '../../components/card-container/card-container';

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
