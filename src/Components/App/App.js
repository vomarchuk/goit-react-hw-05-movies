import { Switch, Route } from 'react-router';
import { useState, useEffect, lazy, Suspense } from 'react';
import './App.css';

import Navigation from '../Navigation';
import Section from '../Section';
import * as movieAPI from '../../Service/Movies-API';

const { fetchTrendingMovie, IMAGE_URL } = movieAPI;
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
    fetchTrendingMovie().then(trendMovies => setMovies([...trendMovies]));
  }, []);

  return (
    <>
      <Section>
        <Navigation />
      </Section>

      <Suspense fallback={<h1>LOADING...</h1>}>
        <Switch>
          <Route path="/" exact>
            <Section>
              <HomePage listMovie={movies} imageUrl={IMAGE_URL} />
            </Section>
          </Route>

          <Route path="/movies" exact>
            <Section>
              <MoviesPage />
            </Section>
          </Route>

          <Route path="/movies/:movieId">
            <Section>
              <MovieDetailsPage />
            </Section>
          </Route>

          <Route>
            <Section>
              <NotFoundView />
            </Section>
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
