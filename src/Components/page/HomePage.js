import PropTypes from 'prop-types';

import TrendingList from '../TrendingList/TrendingList';
function HomePage({ listMovie }) {
  return (
    <>
      <h1>Trending today</h1>
      {listMovie && <TrendingList listMovie={listMovie} />}
    </>
  );
}

TrendingList.propTypes = {
  listMovie: PropTypes.arrayOf(PropTypes.shape),
};

export default HomePage;
