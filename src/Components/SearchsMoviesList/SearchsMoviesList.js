import { useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';

const SearchsMoviesList = ({ moviesCollection }) => {
  const { url } = useRouteMatch();

  if (moviesCollection.length > 0) {
    return (
      <ul>
        {moviesCollection.map(movie => {
          const { id, title } = movie;
          return (
            <li key={id}>
              <Link to={`${url}/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    );
  }
  return <h2>Sorry... no movies for this request :(</h2>;
};

export default SearchsMoviesList;
