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
  const [moviesCollection, setMoviesCollection] = useState(null);
  const location = useLocation();
  const history = useHistory();
  const getSearchMovies = query => {
    history.push({
      ...location,
      search: `query=${query}`,
    });
    setQuery(query);
  };

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
