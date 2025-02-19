// Import modules
import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/** Crée un bouton affichant un texte déroulant.
 * @returns {JSX.Element} Un bouton avac un texte deroulant.
 *
 * @param {string} label - Le nom du dropdown.
 * @param {string} texte - Le contenu à afficher.
 *
 * @FontAwesomeIcon faChevronUp - Icon Importée depuis FontAwesome
 */
function DropdownButton({ label, texte }) {
  // Affiche l'état du bouton (ouvert ou fermé)
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="dropdown">
      <span className="dropdown-label">
        {label}
        <button
          aria-label={label}
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} className={`icone ${isOn ? 'animation' : ''}`} />
        </button>
      </span>
      {isOn && <div className="dropdown-texte">{texte}</div>}
    </div>
  );
}

// Gestion des props
DropdownButton.propTypes = {
  label: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default DropdownButton;
