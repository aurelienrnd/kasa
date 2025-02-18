// Import modules
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';

// Import component
import DropdownButton from '../dropdown-button/dropdown-button';

/** Affiche les informations de chaque hébergement.
 * @returns {JSX.Element} Une div descriptive de l'hébergement.
 * @param {Object} logement - Les données d'un hébergement spécifique.
 *
 * @DropdownButton Component - Un bouton deroulent un texte
 * @FontAwesomeIcon faStar - une icone importée depuis FontAwesome
 */
function Description({ logement }) {
  const host = logement.host;

  return (
    <div className="description">
      <div className="description-content">
        <div className="description-logement">
          <h2>{logement.title}</h2>
          <span>{logement.location}</span>

          <ul className="tag-list">
            {logement.tags.map((tag, index) => (
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
                className={index < parseInt(logement.rating) ? `red-star` : `star`}
              />
            ))}
          </span>
        </div>
      </div>

      <div className="description-buttons">
        <DropdownButton label="Description" texte={logement.description}></DropdownButton>
        <DropdownButton
          label="Équipements"
          texte={
            <ul className="equipments-list">
              {logement.equipments.map((element, index) => (
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
  logement: PropTypes.array.isRequired,
};

export default Description;
