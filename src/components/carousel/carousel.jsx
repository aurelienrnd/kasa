import { useState } from 'react';
import PropTypes from 'prop-types';

function Carousel({ tblImg, descriptionAlt }) {
  const [imgActive, setImgActive] = useState(0);
  console.log(tblImg);

  return (
    <div className="carousel">
      <button onClick={() => setImgActive((imgActive + 1) % tblImg.length)}>next</button>
      <button onClick={() => setImgActive((imgActive - 1 + tblImg.length) % tblImg.length)}>
        prece
      </button>
      <div className="carousel-container">
        {tblImg.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={descriptionAlt}
            className={i === imgActive ? 'show' : 'hidden'}
          />
        ))}
      </div>
    </div>
  );
}

// Gestion des props
Carousel.propTypes = {
  tblImg: PropTypes.array,
  descriptionAlt: PropTypes.string.isRequired,
};

export default Carousel;
