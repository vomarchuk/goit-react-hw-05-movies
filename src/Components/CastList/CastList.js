import * as movieAPI from '../../Service/Movies-API';
import notFoundImg from '../../images/not_Found.svg';
import s from './CastList.module.css';
import PropTypes from 'prop-types';

const { IMAGE_URL } = movieAPI;

const CastList = ({ cast }) => {
  return (
    <>
      {cast && (
        <ul className={s.list}>
          {cast.map(cast => (
            <li key={cast['cast_id']} className={s.item}>
              {cast['profile_path'] ? (
                <img
                  src={`${IMAGE_URL}${cast['profile_path']}`}
                  alt={cast.name}
                  className={s.item_img}
                />
              ) : (
                <img
                  src={notFoundImg}
                  alt="Not found"
                  className={s.not_found_img}
                />
              )}
              <p className={s.text}>{cast.name}</p>
              <p className={s.text}>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
CastList.propTypes = {
  cast: PropTypes.array,
};
export default CastList;
