import PropTypes from 'prop-types';
import styled from 'styled-components';

// Applique la bone image en background celon la proprierte de l'url en paramaitre dans le component
const BannerContainer = styled.div`
background-image: url(${(props) => props.$image}););
`;

/** Affiche la bannire sur la page d'aceuille et A propos".
 * @returns {JSX.Element} Le composant du "Banner".
 * @param {title} string Le titre à afficher.
 * @param {imag} string Le titre à afficher.
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
