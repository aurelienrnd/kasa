// import components
import Banner from '../../components/banner/banner';
import DropdownButton from '../../components/dropdown-button/dropdown-button';

//import image
import imageBanner from '../../assets/images/banner-apropos.webp';

// Tableau contenant le contenu de chaque bouton dropdown
const btnList = [
  {
    label: 'Fiabilité',
    texte:
      'Les annonces sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    label: 'Respect',
    texte:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de pertubation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    label: 'Service',
    texte:
      'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empriente de respect et de bienveillance.',
  },
  {
    label: 'Sécurité',
    texte:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la securité domestique pour nos hôtes.",
  },
];

/** Affiche le contenu de la page "À Propos".
 * @returns {JSX.Element} Le composant de la page "À Propos".
 *
 * @Banner Component - Creation de la baniere
 * @DropdownButton Component - Creations des boutons dropDown
 */
function About() {
  return (
    <main>
      <section>
        <Banner img={imageBanner}></Banner>

        <div className="info-container">
          {btnList.map((btn, index) => (
            <DropdownButton key={`${btn.label}-${index}`} label={btn.label} texte={btn.texte} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default About;
