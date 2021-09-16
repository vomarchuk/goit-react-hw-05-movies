import { Link } from 'react-router-dom';
import s from './TrendingList.module.css';

const TrendingList = ({ listMovie }) => {
  return (
    <ul className={s.list}>
      {listMovie.map(item => (
        <li key={item.id} className={s.item}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default TrendingList;
