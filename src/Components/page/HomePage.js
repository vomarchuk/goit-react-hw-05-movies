import PropTypes from 'prop-types';
import Title from '../Title';
import MoviesList from '../MoviesList/MoviesList';
const HomePage = ({ listMovie, imageUrl }) => {
  return (
    <>
      <Title title="Trending today" />
      {listMovie && (
        <MoviesList
          listMovie={listMovie}
          imageUrl={imageUrl}
          btnName="Go Home"
        />
      )}
    </>
  );
};

HomePage.propTypes = {
  listMovie: PropTypes.arrayOf(PropTypes.shape),
  imageUrl: PropTypes.string,
};

export default HomePage;
