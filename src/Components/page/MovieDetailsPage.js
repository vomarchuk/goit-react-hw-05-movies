import { useEffect, useState, lazy, Suspense } from 'react';
import { Route, useParams, useRouteMatch } from 'react-router';
import { NavLink } from 'react-router-dom';
import * as movieAPI from '../../Service/Movies-API';
import DetailsCard from '../DetailsCard';
import s from './page.module.css';

const CastList = lazy(() =>
  import('../CastList' /*webpackChunkName: "cast-list"*/),
);
const Reviews = lazy(() =>
  import('../Reviews' /*webpackChunkName: "reviews"*/),
);

const MovieDetailsPage = () => {
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState(null);
  const [reviews, setReviews] = useState(null);
  const { url, path } = useRouteMatch();
  const { movieId } = useParams();
  const { fetchDetailsMovie, fetchCastMovie, fetchReviewsMovie, IMAGE_URL } =
    movieAPI;

  useEffect(() => {
    fetchDetailsMovie(movieId).then(setMovie);
    fetchCastMovie(movieId).then(setCast);
    fetchReviewsMovie(movieId).then(setReviews);
  }, []);

  return (
    movie && (
      <>
        <DetailsCard imageUrl={IMAGE_URL} movie={movie} />
        <hr />
        <div className={s.additional_info}>
          <p>Additional information</p>
          <ul className={s.additional_list}>
            <li className={s.additional_item}>
              <NavLink
                to={{
                  pathname: `${url}/cast`,
                }}
              >
                Cast
              </NavLink>
            </li>
            <li className={s.additional_item}>
              <NavLink
                to={{
                  pathname: `${url}/reviews`,
                }}
              >
                Reviews
              </NavLink>
            </li>
          </ul>
        </div>
        <hr />

        <Suspense fallback={<p>loading...</p>}>
          <Route path={`${path}/cast`} exact>
            {cast && <CastList cast={cast} />}
          </Route>
          <Route path={`${path}/reviews`} exact>
            {reviews && <Reviews reviews={reviews} />}
          </Route>
        </Suspense>
      </>
    )
  );
};
export default MovieDetailsPage;
