import { useState } from 'react';
import PropTypes from 'prop-types';
import next from '../../assets/icons/next.svg';
import precedent from '../../assets/icons/precedent.svg';

function Carousel({ tblImg, descriptionAlt }) {
  const [imgActive, setImgActive] = useState(0);
  console.log(tblImg);

  return (
    <div className="carousel">
      <div className="nav-carousel">
        <img
          alt=""
          src={precedent}
          onClick={() => setImgActive((imgActive - 1 + tblImg.length) % tblImg.length)}
        />
        <img src={next} alt="" onClick={() => setImgActive((imgActive + 1) % tblImg.length)} />
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
