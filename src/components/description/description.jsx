import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import DropdownButton from '../dropdown-button/dropdown-button';

function Description({ logement }) {
  const host = logement.host;

  return (
    <div className="description">
      <div className="description-content">
        <div>
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

        <div>
          <div className="host">
            <span>{host.name}</span>
            <img src={host.picture} alt={`Photo de profil ${host.name}`} />
          </div>
          <span>
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

export default Description;
