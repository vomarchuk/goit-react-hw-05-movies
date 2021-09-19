import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import s from './TrendingList.module.css';
import { useLocation } from 'react-router';
const TrendingList = ({ listMovie }) => {
  const location = useLocation();
  return (
    <ul className={s.list}>
      {listMovie.map(item => (
        <li key={item.id} className={s.item}>
          <Link
            to={{
              pathname: `/movies/${item.id}`,
              state: {
                from: location,
                label: 'Back Home',
              },
            }}
          >
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
TrendingList.propTypes = {
  listMovie: PropTypes.arrayOf(PropTypes.shape),
};
export default TrendingList;
