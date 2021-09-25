import { useHistory, useLocation } from 'react-router';
import { useState, useEffect } from 'react';
import Searchbar from '../Searchbar';
import * as movieAPI from '../../Service/Movies-API';
import MoviesList from '../MoviesList';

const { fetchQueryMovie, IMAGE_URL } = movieAPI;

const MoviesPage = () => {
  const [query, setQuery] = useState('');
  const [hisporySearch, setHistorySearch] = useState(null);
  const [moviesCollection, setMoviesCollection] = useState(null);
  const location = useLocation();
  const history = useHistory();

  const historyQuery =
    history.location.search &&
    history.location.search
      .match(/[a-z 0-9]+$/g)
      .join()
      .trim('');

  const getSearchMovies = query => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setQuery(query);
  };

  useEffect(() => {
    setHistorySearch(historyQuery);
    setQuery(hisporySearch);
  }, [hisporySearch]);

  useEffect(() => {
    if (query) {
      fetchQueryMovie(query).then(setMoviesCollection);
    }
    return;
  }, [query]);

  return (
    <>
      <Searchbar onSubmit={getSearchMovies} />
      {moviesCollection && (
        <MoviesList
          listMovie={moviesCollection}
          imageUrl={IMAGE_URL}
          btnName="Go Movies"
        />
      )}
    </>
  );
};

export default MoviesPage;
