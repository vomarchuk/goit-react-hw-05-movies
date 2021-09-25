import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import s from './MoviesList.module.css';
import { useLocation } from 'react-router';
import NotFoundImg from '../../images/not-found-icon-28.jpg';

const MoviesList = ({ listMovie, imageUrl, btnName }) => {
  const location = useLocation();

  if (listMovie.length > 0) {
    return (
      <ul className={s.list}>
        {listMovie.map(movie => {
          const { id } = movie;
          const cardImage = movie['poster_path']
            ? imageUrl + movie['poster_path']
            : NotFoundImg;

          return (
            <li key={id} className={s.item}>
              <Link
                className={s.link}
                to={{
                  pathname: `/movies/${id}`,
                  state: {
                    from: location,
                    label: btnName,
                  },
                }}
              >
                <img
                  className={s.img}
                  src={cardImage}
                  alt="item.title"
                  height="400"
                />
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
  return <h2>Sorry... no movies for this request :(</h2>;
};
MoviesList.propTypes = {
  listMovie: PropTypes.arrayOf(PropTypes.shape),
  imageUrl: PropTypes.string,
  btnName: PropTypes.string.isRequired,
};
export default MoviesList;
