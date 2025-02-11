import { useState } from 'react';
import PropTypes from 'prop-types';

function DropdownButton({ label, texte }) {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="dropdown">
      <span className="dropdown-label">
        {label}
        <button onClick={toggle}>x</button>
      </span>
      {isOn && <p className="dropdown-texte">{texte}</p>}
    </div>
  );
}

DropdownButton.propTypes = {
  label: PropTypes.string.isRequired,
  texte: PropTypes.string.isRequired,
};

export default DropdownButton;
