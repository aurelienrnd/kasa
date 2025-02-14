import UseGetFetch from '../../utile/use-hook/use-getfetch';
import PropTypes from 'prop-types';
import GetDataContext from './get-data-context.jsx';

// Création du Provider
function GetDataProvider({ children }) {
  const url = '/data/accommodation-data.json'; // Chemin vers ton fichier JSON ou API
  const { loading, data, error } = UseGetFetch(url);

  return (
    <GetDataContext.Provider value={{ loading, data, error }}>{children}</GetDataContext.Provider>
  );
}

// Gestion des props
GetDataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GetDataProvider;
