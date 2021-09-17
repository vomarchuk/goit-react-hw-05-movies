import PropTypes from 'prop-types';

import Container from '../Container';
import s from './Reviews.module.css';
const Reviews = ({ reviews }) => {
  console.log(reviews);
  if (reviews.length > 0) {
    return (
      <Container>
        <ul className={s.list}>
          {reviews.map(item => (
            <li key={item.id} className={s.item}>
              <h3>Author: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
  return <h3>We don't have any reviews for this movie :(</h3>;
};
Reviews.propTypes = {
  reviews: PropTypes.array,
};
export default Reviews;
