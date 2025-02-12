import { useState } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

/** Affiche la bannire sur la page d'aceuille et A propos".
 * @returns {JSX.Element} Le composant du "Banner".
 * @param {label} string Le non du dropdown.
 * @param {texte} string Le contenue a afficher.
 */
function DropdownButton({ label, texte }) {
  const [isOn, setIsOn] = useState(false);

  return (
    <div className="dropdown">
      <span className="dropdown-label">
        {label}
        <button
          onClick={() => {
            setIsOn(!isOn);
          }}
        >
          <FontAwesomeIcon icon={faChevronUp} className={`icone ${isOn ? 'animation' : ''}`} />
        </button>
      </span>
      <p className={`dropdown-texte ${isOn && `open`}`}>{isOn && `${texte}`}</p>
    </div>
  );
}

// Gestion des props
DropdownButton.propTypes = {
  label: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default DropdownButton;
