// Import modules
import { useState } from 'react';
import PropTypes from 'prop-types';

// Import images
import next from '../../assets/icons/next.svg';
import precedent from '../../assets/icons/precedent.svg';

/** Affiche un carrousel des différentes images à afficher sur la page d'accueil.
 * @returns {JSX.Element} Le carrousel des différentes images.
 *
 * @param {Array} tblImg - Tableau des images à afficher dans le carrousel.
 * @param {string} descriptionAlt - Texte alternatif pour chaque image.
 */
function Carousel({ tblImg, descriptionAlt }) {
  // Position de l'image à afficher dans le tableau tblImg
  const [imgActive, setImgActive] = useState(0);

  return (
    <div className="carousel">
      <div className="nav-carousel">
        <img
          className="btn-nav"
          alt="precedent"
          src={precedent}
          onClick={() => setImgActive((imgActive - 1 + tblImg.length) % tblImg.length)}
        />
        <img
          className="btn-nav"
          src={next}
          alt="suivant"
          onClick={() => setImgActive((imgActive + 1) % tblImg.length)}
        />
      </div>

      {tblImg.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={descriptionAlt}
          className={`image-logement ${i === imgActive ? 'show' : 'hidden'}`}
        />
      ))}
    </div>
  );
}

// Gestion des props
Carousel.propTypes = {
  tblImg: PropTypes.array,
  descriptionAlt: PropTypes.string.isRequired,
};

export default Carousel;
