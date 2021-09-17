import PropTypes from 'prop-types';
import GenresList from '../GenresList';
import notFoundImg from '../../images/not_Found.svg';
import s from './DetailsCard.module.css';
import { useLocation, useHistory } from 'react-router';

const DetailsCard = ({ imageUrl, movie }) => {
  const location = useLocation();
  const histori = useHistory();

  const cardImage = `${imageUrl}${movie['poster_path']}`;

  const onGoBack = () => {
    histori.push(location?.state?.from ?? '/');
  };
  return (
    <>
      <button type="button" onClick={onGoBack}>
        go back
      </button>

      <div className={s.card}>
        <img
          src={(movie['poster_path'] && cardImage) || notFoundImg}
          alt={movie.title}
          className={s.card_image}
        />
        <div className={s.card_details}>
          <h1>{`${movie.title} (${movie['release_date'].split('-')[0]})`}</h1>
          <p>User Score: {movie['vote_average'] * 10 + '%'}</p>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
          <GenresList title="Genres" genres={movie.genres} />
        </div>
      </div>
    </>
  );
};
DetailsCard.propTypes = {
  imageUrl: PropTypes.string,
  movie: PropTypes.object,
};
export default DetailsCard;
