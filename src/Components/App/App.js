import { Switch, Route } from 'react-router';
import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';

import Container from '../Container';
import Navigation from '../Navigation';
import Section from '../Section';
import movieAPI from '../../Service/Movies-API';

const HomePage = lazy(() =>
  import('../page/HomePage' /*webpackChunkName: "home-page"*/),
);
const MoviesPage = lazy(() =>
  import('../page/MoviesPage' /*webpackChunkName: "movies-page"*/),
);
const NotFoundView = lazy(() =>
  import('../page/NotFoundView' /*webpackChunkName: "not-found-view"*/),
);
const MovieDetailsPage = lazy(() =>
  import('../page/MovieDetailsPage' /*webpackChunkName: "movie-details-page"*/),
);

function App() {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    movieAPI
      .fetchTrendingMovie()
      .then(trendMovies => setMovies([...trendMovies]));
  }, []);

  return (
    <>
      <Section>
        <Container>
          <Navigation />
        </Container>
      </Section>

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/" exact>
            <Section>
              <Container>
                <HomePage listMovie={movies} />
              </Container>
            </Section>
          </Route>

          <Route path="/movies" exact>
            <Section>
              <Container>
                <MoviesPage />
              </Container>
            </Section>
          </Route>

          <Route path="/movies/:movieId">
            <Section>
              <Container>
                <MovieDetailsPage />
              </Container>
            </Section>
          </Route>

          <Route>
            <Section>
              <Container>
                <NotFoundView />
              </Container>
            </Section>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
