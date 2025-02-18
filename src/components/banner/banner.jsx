// Import modules
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Applique la bonne image en arrière-plan selon la propriété de l'URL passée en paramètre dans le composant
const BannerContainer = styled.div`
background-image: url(${(props) => props.$image}););
`;

/** Affiche la bannière sur la page d'accueil et la page "À propos".
 * @returns {JSX.Element} Le composant "Banner".
 *
 * @param {string} title - Le titre à afficher.
 * @param {string} imag - L'image à afficher.
 */
function Banner({ title, img }) {
  return (
    <BannerContainer className="banner" $image={img}>
      <div className="overlay">{title && <h1>{title}</h1>}</div>
    </BannerContainer>
  );
}

// Gestion des props
Banner.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string.isRequired,
};

export default Banner;
