import Section from '../Section';
import Searchbar from '../Searchbar';
import Container from '../Container';
import { useState, useEffect } from 'react';
import movieAPI from '../../Service/Movies-API';
import SearchsMoviesList from '../SearchsMoviesList/SearchsMoviesList';
import { useHistory, useLocation } from 'react-router';

const { fetchQueryMovie } = movieAPI;

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
    <Section>
      <Container>
        <Searchbar onSubmit={getSearchMovies} />
        {moviesCollection && (
          <SearchsMoviesList moviesCollection={moviesCollection} />
        )}
      </Container>
    </Section>
  );
};

export default MoviesPage;
