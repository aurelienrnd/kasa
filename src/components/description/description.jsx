// Import modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// Import component
import DropdownButton from '../dropdown-button/Dropdown-button';

/** Affiche les informations de chaque hébergement.
 * @returns {JSX.Element} Une div descriptive de l'hébergement.
 * @param {Object} accommodation - Les données d'un hébergement spécifique.
 *
 * @DropdownButton Component - Un bouton deroulent un texte
 * @FontAwesomeIcon faStar - une icone importée depuis FontAwesome
 */
function Description({ accommodation }) {
  const host = accommodation.host;

  return (
    <div className="description">
      <div className="description-content">
        <div className="description-logement">
          <h2>{accommodation.title}</h2>
          <span>{accommodation.location}</span>

          <ul className="tag-list">
            {accommodation.tags.map((tag, index) => (
              <li key={`${index}-${tag}`} className="tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <div className="host-rating">
          <div className="host">
            <span>{host.name}</span>
            <img src={host.picture} alt={`Photo de profil ${host.name}`} />
          </div>

          <span className="rating">
            {[...Array(5)].map((element, index) => (
              <FontAwesomeIcon
                key={index}
                icon={faStar}
                className={index < parseInt(accommodation.rating) ? `red-star` : `star`}
              />
            ))}
          </span>
        </div>
      </div>

      <div className="description-buttons">
        <DropdownButton label="Description" texte={accommodation.description}></DropdownButton>
        <DropdownButton
          label="Équipements"
          texte={
            <ul className="equipments-list">
              {accommodation.equipments.map((element, index) => (
                <li key={`${index}-${element}`}>{element}</li>
              ))}
            </ul>
          }
        ></DropdownButton>
      </div>
    </div>
  );
}

// Gestion des props
Description.propTypes = {
  accommodation: PropTypes.array.isRequired,
};

export default Description;
