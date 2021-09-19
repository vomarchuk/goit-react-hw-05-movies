import PropTypes from 'prop-types';

import { useRouteMatch, useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const SearchsMoviesList = ({ moviesCollection }) => {
  const { url } = useRouteMatch();
  const location = useLocation();

  if (moviesCollection.length > 0) {
    return (
      <ul>
        {moviesCollection.map(movie => {
          const { id, title } = movie;
          return (
            <li key={id}>
              <Link
                to={{
                  pathname: `${url}/${id}`,
                  state: {
                    from: location,
                    label: 'Go Movies',
                  },
                }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  return <h2>Sorry... no movies for this request :(</h2>;
};
SearchsMoviesList.propTypes = {
  moviesCollection: PropTypes.arrayOf(PropTypes.shape),
};
export default SearchsMoviesList;
